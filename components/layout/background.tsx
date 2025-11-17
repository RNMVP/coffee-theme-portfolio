export default function Background({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="absolute inset-0 z-[-1]">{children}</div>;
}
