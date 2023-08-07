import React, { useEffect, useState } from "react";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import LayoutDashboard from "@/layout/layoutDashboard";
import { getStaticPaths, makeStaticProps } from "@/lib/getStatic";
import axios from "axios";
import { Switch } from "@headlessui/react";
import { useRouter } from "next/router";

const getStaticProps = makeStaticProps([
  "seo",
  "navbar",
  "common",
  "contract-list",
  "error",
  "dashboard-page",
  "toast-messages",
]);
export { getStaticPaths, getStaticProps };

interface SaasStatsData {
  totalAccounts: number;
  paidAccountsCount: number;
  verifiedAccountsCount: number;
  totalSummaries: number;
  totalSummariesV1: number;
  totalSummariesV2: number;
  totalOpenAiCharges: { _sum: { amount: number } };
  monthlyActiveUsers: number;
  totalSearches: number;
  totalCustomRequests: number;
  averageRating: number;
}

export default function AdminDashboard() {
  const { t } = useTranslation();
  const [statsData, setStatsData] = useState<SaasStatsData | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchSaasData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_HOSTNAME}/api/v1/admin/dashboard`,
          { withCredentials: true }
        );
        const {
          totalAccounts,
          paidAccountsCount,
          verifiedAccountsCount,
          totalSummaries,
          totalSummariesV1,
          totalSummariesV2,
          totalOpenAiCharges,
          monthlyActiveUsers,
          totalSearches,
          totalCustomRequests,
          averageRating,
        } = response.data;
        setStatsData({
          totalAccounts,
          paidAccountsCount,
          verifiedAccountsCount,
          totalSummaries,
          totalSummariesV1,
          totalSummariesV2,
          totalOpenAiCharges,
          monthlyActiveUsers,
          totalSearches,
          totalCustomRequests,
          averageRating,
        });
      } catch (err) {
        console.log(err);
      }
    };
    fetchSaasData();
  }, []);

  const renderStatCard = (title: string, value: string | number | null) => {
    return (
      <div className="flex flex-col text-center">
        <h3 className="mb-2 font-bold text-xl">{title}</h3>
        <p className="text-lg font-semibold">{value}</p>
      </div>
    );
  };

  return (
    <>
      <Head>
        <title>{t("seo:dashboard-page-seo-meta-title")}</title>
      </Head>
      <LayoutDashboard>
        <div className="p-6 lg:p-8">
          <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto">
              <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                {t("dashboard-page:admin.title")}
              </h2>
            </div>
          </div>
          {statsData && (
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="col-span-full bg-white border-x border-y p-4 rounded-lg shadow-sm">
                <div className="flex items-baseline">
                  <h2 className="mb-2 font-bold text-2xl">Accounts</h2>
                  <span
                    onClick={() => {
                      router.push("/dashboard/admin/accounts-overview");
                    }}
                    className="px-2 text-center text-sm font-semibold text-blue-600 hover:text-blue-500 cursor-pointer"
                  >
                    View details
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  {renderStatCard("Total Accounts", statsData.totalAccounts)}
                  {renderStatCard(
                    "Verified Accounts",
                    statsData.verifiedAccountsCount
                  )}
                  {renderStatCard("Paid Accounts", statsData.paidAccountsCount)}
                  {renderStatCard("MAU", statsData.monthlyActiveUsers)}
                </div>
              </div>
              <div className="col-span-full bg-white border-x border-y p-4 rounded-lg shadow-sm">
                <div className="flex items-baseline">
                  <h2 className="mb-2 font-bold text-2xl">3rd party charges</h2>
                  <span
                    onClick={() => {
                      router.push("/");
                    }}
                    className="px-2 text-center text-sm font-semibold text-blue-600 hover:text-blue-500 cursor-pointer"
                  >
                    View details
                  </span>
                </div>
                <div className="grid grid-cols-1 gap-4 pt-4">
                  {renderStatCard(
                    "OpenAI",
                    `$${statsData?.totalOpenAiCharges?._sum?.amount?.toFixed(
                      5
                    )}`
                  )}
                </div>
              </div>
              <div className="col-span-full bg-white border-x border-y p-4 rounded-lg shadow-sm">
                <div className="flex items-baseline">
                  <h2 className="mb-2 font-bold text-2xl">Features</h2>
                  <span
                    onClick={() => {
                      router.push("/");
                    }}
                    className="px-2 text-center text-sm font-semibold text-blue-600 hover:text-blue-500 cursor-pointer"
                  >
                    View details
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-4">
                  {renderStatCard("Total Summaries", statsData.totalSummaries)}
                  {renderStatCard("Summaries (v1)", statsData.totalSummariesV1)}
                  {renderStatCard("Summaries (v2)", statsData.totalSummariesV2)}
                  {renderStatCard(
                    "Smart Search Total",
                    statsData.totalSearches
                  )}
                  {renderStatCard("Smart Search", statsData.totalSearches)}
                  {renderStatCard("Smart Search Plus", "Coming Soon...")}
                  {renderStatCard(
                    "Custom Request",
                    statsData.totalCustomRequests
                  )}
                </div>
              </div>
              <div className="col-span-full bg-white border-x border-y p-4 rounded-lg shadow-sm">
                <div className="flex items-baseline">
                  <h2 className="mb-2 font-bold text-2xl">Ratings</h2>
                  <span
                    onClick={() => {
                      router.push("/");
                    }}
                    className="px-2 text-center text-sm font-semibold text-blue-600 hover:text-blue-500 cursor-pointer"
                  >
                    View details
                  </span>
                </div>
                <div className="grid grid-cols-1 gap-4 pt-4">
                  {renderStatCard(
                    "Avg. Rating",
                    `${(statsData.averageRating * 100).toFixed(2)}%`
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </LayoutDashboard>
    </>
  );
}

AdminDashboard.requireAdmin = true;
