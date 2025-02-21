export type ActionState = {
  status: "success" | "error";
  message: string;
  data?: any;
};

export type ActionError = {
  status: "error";
  message: string;
};

export type ActionSuccess = {
  status: "success";
  message: string;
  data?: any;
};

    