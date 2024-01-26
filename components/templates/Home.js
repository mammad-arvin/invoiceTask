import Link from "next/link";

const HomePage = () => {
    return (
        <div className="w-full h-[400px] flex justify-center items-center text-center ">
            <Link
                className="border rounded p-4"
                href="/invoice/choose-a-template/configuration/new-invoice-page/in-progress-page"
            >
                Go to new invoice page
            </Link>
        </div>
    );
};

export default HomePage;
