import client from "./client";

//로그인
export const login = async (userId, password) => {
  await client
    .post("/auth/signin", { userId, password })
    .then((response) => console.log(response));
};

//회원가입
export const signUp = ({
  userId,
  userName,
  password,
  gender,
  birth,
  address,
  email,
  tel,
}) => {
  client
    .post("v1/auth/signup", {
      userId,
      userName,
      password,
      gender,
      birth,
      address,
      email,
      tel,
    })
    .then((response) => console.log(response));
};

//마이페이지 조회
export const authGet = () => {
  client.get("/auth");
};

//회원 정보 수정
export const authPatch = ({ userName, gender, birth, address, email, tel }) => {
  client.patch("/auth/update-state", {
    userName,
    gender,
    birth,
    address,
    email,
    tel,
  });
};

// 회원 탈퇴
export const authDelete = () => {
  client.delete("/auth/withdraw");
};

// 회원 아이디 찾기
export const authFindId = ({ email }) => {
  client.post("/auth/findId", { email });
};

// 회원 비밀번호 찾기
export const authFindPassword = ({ userId, email }) => {
  client.post("/auth/findPw", { userId, email });
};

// 로그인 상태 확인
export const check = () => client.get("/auth/check");
