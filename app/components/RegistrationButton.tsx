"use client";
import { useState } from "react";
import { RegistrationModal, RegistrationProgram } from "./RegistrationModal";

export function RegistrationButton({
  program,
  label = "Registreeri →",
  style,
  className,
}: {
  program: RegistrationProgram;
  label?: string;
  style?: React.CSSProperties;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        style={{ cursor: "pointer", fontFamily: "inherit", border: "none", ...style }}
        className={className}
      >
        {label}
      </button>
      {open && <RegistrationModal program={program} onClose={() => setOpen(false)} />}
    </>
  );
}
