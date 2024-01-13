import HeaderUserPath from "../modules/HeaderUserPath";
import SideBarMenu from "../modules/SideBarMenu";
import BasicInfo from "../modules/mainOfInvoice/BasicInfo";
import InvoiceBar from "../modules/mainOfInvoice/InvoiceBar";
import OtherInfo from "../modules/mainOfInvoice/OtherInfo";
import ProductTable from "../modules/mainOfInvoice/ProductTable";

const HomePage = () => {
    return (
        <div className="div-container flex bg-white">
            <article>
                <SideBarMenu />
            </article>

            <article className="col-span-10 w-full ">
                <nav>
                    <HeaderUserPath />
                </nav>

                <main className="w-full flex flex-col gap-10 justify-start p-4">
                    <InvoiceBar />
                    <BasicInfo />
                    <ProductTable />
                    <OtherInfo />
                </main>
            </article>
        </div>
    );
};

export default HomePage;
