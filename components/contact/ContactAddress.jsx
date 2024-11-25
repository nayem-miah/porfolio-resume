export default function ContactAddress() {
  return (
    <>
      <div className="mt-[30px] rounded-xl bg-white p-[30px] dark:bg-card">
        <h2 className="text-[24px] text-btn dark:text-white">
          Request a quote for work
        </h2>
        <div className="mt-[20px] grid gap-[30px] xl:flex xl:gap-[60px]">
          <div>
            <p className="text-[14px] text-text">Call for help</p>
            <p className="mt-[6px] text-[16px] font-medium text-btn dark:text-white">
              +88 01609538714
            </p>
          </div>
          <div>
            <p className="text-[14px] text-text">Home Address</p>
            <p className="mt-[6px] text-[16px] font-medium text-btn dark:text-white">
              House-4, Road-1, Block-B, <br />
              Aftabnagar, Dhaka, Bangladesh
            </p>
          </div>
          <div>
            <p className="text-[14px] text-text">Email address</p>
            <p className="mt-[6px] text-[16px] font-medium text-btn dark:text-white">
              nayemmiah.cu@gmail.com
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
