import client from "./client";

export const readLendingList = () => {
  client.get(`/lending/${uid}`);
};

export const readReservation = () => {
  client.get("/lending/reservation");
};

export const updateReservation = ({ uid, libraryId, bookId }) => {
  client.patch("/lending/reservaion", { uid, libraryId, bookId });
};

export const deleteReservation = ({ uid, bookId }) => {
  client.delete(`/lending/reservation/${uid}/${bookId}`);
};
