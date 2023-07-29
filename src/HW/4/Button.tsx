type ButtonPropsType = {
  callBack: any
  name: any
};

export const Button = (props: ButtonPropsType) => {
  const callBackHandler = () => {
  
  };

  return (
    <button id={'hw04-button'} onClick={callBackHandler}>
      {props.name}
    </button>
  );
};
