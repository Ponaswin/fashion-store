"use client";
import { Spinner } from "../components/spinner";

export default function Loading() {
    return (
        <div className="w-[100vw] h-[100vh] flex justify-center items-center">
            <Spinner classname={" w-[50px] h-[50px]   "} />
        </div>
    );
}
