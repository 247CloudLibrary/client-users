import client from "./client";

// user 대출 조회
export const lendingListGet = () => {
    client.get(`/lending/${uid}`);
};
//user 예약 조회
export const reservationGet = () => {
    client.get('/lending/reservation');
};

// 예약 요청
export const reservationPatch = ({uid, libraryId, bookId}) => {
    client.patch('/lending/reservaion', {uid, libraryId, bookId});
};

// 예약 취소 요청
export const reservationDelete = ({uid, bookId}) => {
    client.delete(`/lending/reservation/${uid}/${bookId}`)
};