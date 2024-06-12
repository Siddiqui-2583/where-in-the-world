import { cn } from "@lib/utils";
import { TReactNode } from "@types";

type InfoItemProps = {
  title: string;
  value: string | TReactNode;
  className?: string;
};
export default function InfoItem({ title, value,className }: InfoItemProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <p className="font-bold text-primary">{title}:</p> {value}
    </div>
  );
}
