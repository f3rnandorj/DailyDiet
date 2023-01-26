type InputStyle = {
  inputSize: {
    height: number;
    width?: number;
  };
};

export type InputVariant = {
  inputBox: InputStyle;
};

const inputLine: InputVariant = {
  inputBox: {
    inputSize: {
      height: 55,
    },
  },
};

const inputDescription: InputVariant = {
  inputBox: {
    inputSize: {
      height: 150,
    },
  },
};

const inputTimeHour: InputVariant = {
  inputBox: {
    inputSize: {
      height: 55,
    },
  },
};

export const variants = {
  line: inputLine,
  box: inputDescription,
  timeHour: inputTimeHour,
};
