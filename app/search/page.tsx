"use client";
import { useSearchParams } from "next/navigation";
import { notFound } from "next/navigation";

function Dashboard() {
  const searchParams = useSearchParams();
  let searchQuery = searchParams.get("q");

  if (!searchQuery) {
    return notFound;
  }

  return (
    <div>
      <p>{searchQuery}</p>
      <p>{searchQuery}</p>
      <p>{searchQuery}</p>
      <p>{searchQuery}</p>
      <p>{searchQuery}</p>
      <p>{searchQuery}</p>
      <p>{searchQuery}</p>
      <p>{searchQuery}</p>
      <p>{searchQuery}</p>
      <p>{searchQuery}</p>
      <p>{searchQuery}</p>
      <p>{searchQuery}</p>
      <p>{searchQuery}</p>
      <p>{searchQuery}</p>
      <p>{searchQuery}</p>
      <p>{searchQuery}</p>
      <p>{searchQuery}</p>
      <p>{searchQuery}</p>
      <p>{searchQuery}</p>
      <p>{searchQuery}</p>
      <p>{searchQuery}</p>
      <p>{searchQuery}</p>
      <p>{searchQuery}</p>
      <p>{searchQuery}</p>
      <p>{searchQuery}</p>
      <p>{searchQuery}</p>
      <p>{searchQuery}</p>
      <p>{searchQuery}</p>
      <p>{searchQuery}</p>
      <p>{searchQuery}</p>
      <p>{searchQuery}</p>
      <p>{searchQuery}</p>
      <p>{searchQuery}</p>
      <p>{searchQuery}</p>
      <p>{searchQuery}</p>
      <p>{searchQuery}</p>
      <p>{searchQuery}</p>
      <p>{searchQuery}</p>
      <p>{searchQuery}</p>
      <p>{searchQuery}</p>
      <p>{searchQuery}</p>
      <p>{searchQuery}</p>
      <p>{searchQuery}</p>
      <p>{searchQuery}</p>
      <p>{searchQuery}</p>
      <p>{searchQuery}</p>
      <p>{searchQuery}</p>
      <p>{searchQuery}</p>
      <p>{searchQuery}</p>
      <p>{searchQuery}</p>
      <p>{searchQuery}</p>
      <p>{searchQuery}</p>

    </div>
  );
}

export default Dashboard;
