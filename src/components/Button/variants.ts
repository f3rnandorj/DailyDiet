import theme from "../../theme";

type ButtonStyle = {
  button: {
    backgroundColor: string;
    borderWidth?: number;
    borderColor?: string;
  };
  title: {
    color: string;
  };
  icon: {
    color: string;
  };
};

type ButtonVariant = {
  enabled: ButtonStyle;
  disabled: ButtonStyle;
};

const buttonPrimary: ButtonVariant = {
  enabled: {
    button: {
      backgroundColor: theme.COLORS.GRAY_200,
    },
    title: {
      color: theme.COLORS.WHITE,
    },
    icon: {
      color: theme.COLORS.WHITE,
    },
  },
  disabled: {
    button: {
      backgroundColor: "#B8B8B8",
    },
    title: {
      color: "#FFF",
    },
    icon: {
      color: "#FFF",
    },
  },
};

const buttonOutline: ButtonVariant = {
  enabled: {
    button: {
      backgroundColor: "transparent",
      borderWidth: 2,
      borderColor: theme.COLORS.GRAY_100,
    },
    title: {
      color: theme.COLORS.GRAY_100,
    },
    icon: {
      color: theme.COLORS.GRAY_100,
    },
  },
  disabled: {
    button: {
      backgroundColor: "transparent",
      borderWidth: 2,
      borderColor: "#B8B8B8",
    },
    title: {
      color: "#B8B8B8",
    },
    icon: {
      color: "#B8B8B8",
    },
  },
};

export const variants = {
  primary: buttonPrimary,
  outline: buttonOutline,
};
