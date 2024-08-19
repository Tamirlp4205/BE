export const SelectOption = ({ children, buttonText = 'Confirm' }) => {
  return (
    <div className="flex flex-col items-center gap-[141px] mt-10">
      <div className="flex flex-col items-center gap-12">
        <LogoIcon />
        <div className="flex gap-12 relative">
          {Process.map((el, i) => (
            <div className="flex flex-col items-center gap-1">
              <div className="size-6 bg-[#E5E7EB] rounded-full text-center">
                {i + 1}
              </div>
              <p>{el}</p>
            </div>
          ))}
          <div className="w-[220px] h-1 bg-[#E5E7EB] absolute left-6 top-2.5 z-[-1]"></div>
        </div>
      </div>
      <div className="flex flex-col items-center w-[352px]">
        {children}
        <Button className="w-full h-12 p-4 rounded-[20px] bg-[#0166FF] text-[#FFFFFF]">
          {buttonText}
        </Button>
      </div>
    </div>
  );
};
