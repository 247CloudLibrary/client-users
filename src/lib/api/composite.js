import client from "./client";
import qs from "qs";

// 도서 정보 composite에 전송
export const compositePost = ({
        id, 
        rid, 
        libraryId, 
        isbn, 
        title, 
        thumbnailImage, 
        coverImage, 
        author, 
        contents, 
        publisher, 
        publishDateTime,
        type,
        genre,
        barcord,
        bookStatus,
        createdAt,
        updatedAt,
        rfid,
        category} ) => {
    client.post('/composite', {
        id, 
        rid, 
        libraryId, 
        isbn, 
        title, 
        thumbnailImage, 
        coverImage, 
        author, 
        contents, 
        publisher, 
        publishDateTime,
        type,
        genre,
        barcord,
        bookStatus,
        createdAt,
        updatedAt,
        rfid,
        category});
};

// composite 도서 검색 목록
export const compositeSearchList = ({keyword, libraryArr, publisher, author, category}) => {
    const queryString = qs.stringify({
    keyword,
    libraryArr,
    publisher,
    author,
    category,
    });

    return client.get(`/composite/search?${queryString}`);
};

// 도서 상세 페이지
export const compositeSearchDetail = () => {
    client.get('/composite/bookId');
};

//  분실된 도서 상태 업데이트
export const compositeBookStatusPatch = ({bookId, bookStatus}) => {
    client.patch(`/composite/bookstatus/${bookId}`, {bookStatus});
};


// 대출, 반납 연체된 도서 대출 상태 업데이트
export const compositeLendingStatusPathch = ({bookId, lendingStatus}) => {
    client.patch(`/composite/lending/${bookId}`, {lendingStatus})
};

//  예약된 도서 상태 업데이트
export const compositeReservationPatch = ({bookId, uid, libraryId}) => {
    client.patch(`/composite/bookstatus/${bookId}`, {uid, libraryId});
};