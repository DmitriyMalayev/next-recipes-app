"use client";

export default function MealsError({
  error,
  retry,
}: {
  error: unknown;
  retry: () => void;
}) {
  const message =
    error instanceof Error ? error.message : "Something went wrong";

  return (
    <main className="mx-auto w-full max-w-3xl px-6 pt-16 pb-20 text-center">
      <h1 className="mb-4 font-display text-4xl leading-tight font-bold text-white">
        Something went wrong
      </h1>
      <p className="mb-2 text-[1.15rem] leading-[1.6] text-[#ddd6cb]">
        This meals page could not be loaded.
      </p>
      <p className="mb-8 text-sm text-[#ddd6cb]">{message}</p>
      <button
        type="button"
        onClick={() => retry()}
        className="cursor-pointer rounded-full border-0 bg-[#f9572a] px-5 py-2.5 font-sans text-base font-semibold text-[#ffc905] transition hover:bg-[#fd4715] hover:text-white focus-visible:text-white"
      >
        Try again
      </button>
    </main>
  );
}
