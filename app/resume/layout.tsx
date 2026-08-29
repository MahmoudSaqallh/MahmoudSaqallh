import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume | Mahmoud Saq Allah",
  description:
    "Resume of Mahmoud Saq Allah — MERN Stack Developer. السيرة الذاتية لمحمود ساق الله",
};

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
