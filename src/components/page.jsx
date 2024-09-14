import { forwardRef } from "react";

const Page = forwardRef(function Page({pageCover,pageText},ref) {
    return (
        <div ref={ref}>
            {pageCover && <img src={pageCover} alt="" aria-hidden="true" className="h-full w-full" />}
            {pageText && <p className="min-h-[100%] book-bg p-4 flex items-center justify-center font-extrabold text-2xl text-center text-[#EEEEEE]">{pageText}</p>}
        </div>
    );
})

export default Page;
