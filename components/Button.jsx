import { Button } from "./ui/button";

export default function CustomButton({
  variant = "default",
  className = "",
  children,
  size = "",
}) {
  return (
    <Button
      className={`inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-semibold ring-offset-white transition-colors cursor-pointer ${className}`}
      variant={variant}
      {...(size ? { size } : {})}
    >
      {children}
    </Button>
  );
}
