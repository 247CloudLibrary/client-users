import LendingListForm from "../../components/lending/LendingListForm";
import Footer from "../home/Footer";

const LendingRecordPage = () => {
  return (
    <>
      <div className="lendingList">
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
