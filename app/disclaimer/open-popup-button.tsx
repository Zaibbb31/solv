"use client";

export default function OpenPopupButton() {
  const handleOpenPopup = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new Event("open-disclaimer-modal"));
    }
  };

  return (
    <button
      type="button"
      onClick={handleOpenPopup}
      className="px-6 py-3 rounded-xl border border-[#B7873A]/40 bg-[#0a233d] hover:bg-[#071A2E] text-[#E0B669] hover:text-white font-medium text-sm transition-all cursor-pointer"
    >
      View Popup Notice
    </button>
  );
}

