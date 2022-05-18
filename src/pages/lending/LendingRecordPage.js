import LendingListForm from "../../components/lending/LendingListForm";
import Header from "../../components/common/Header";
import Footer from "../../pages/home/Footer";

const LendingRecordPage = () => {
  return (
    <>
      <div className="lendingList">
        <Header />
        <div className="lending-list-title">Lending List</div>
        <div className="lendingData">
          <div className="lendingListForm">
            <LendingListForm />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LendingRecordPage;
