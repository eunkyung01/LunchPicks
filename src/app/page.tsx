import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="w-full h-screen bg-glay10 relative flex justify-center items-center overflow-hidden">
      <div className="w-[637px] bg-white z-1 border border-gray-100 rounded-[24px] shadow-lg pt-[60px] px-[77px] pb-[47px]">
        <div className="flex flex-col ">
          <div className="flex flex-col justify-center items-center">
            <p className="font-SBAggroM text-lg leading-[19px]">
              오늘의 점심 메뉴는
            </p>
            <span className="font-SBAggroB text-blue text-3xl leading-[38px]">
              LunchPick
            </span>
          </div>
          <div>
            <div className="flex flex-col">
              <label>Email</label>
              <input
                placeholder="이메일을 입력해주세요"
                className="bg-glay100 border-glay100 placeholder:text-gray200 h-[52px] px-[20px] rounded-[16px] text-2lg font-medium focus:border-blue border-[2px] focus:outline-0 text-black"
              />
            </div>
            <div className="flex flex-col">
              <label>Password</label>
              <input
                placeholder="비밀번호를 입력해주세요"
                className="bg-glay100 border-glay100 placeholder:text-gray200 h-[52px] px-[20px] rounded-[16px] text-2lg font-medium focus:border-blue border-[2px] focus:outline-0 text-black"
              />
            </div>
            <div className="flex justify-between">
              <div>
                <input type="checkbox" />
                <label>로그인유지</label>
              </div>
              <p>비밀번호를 잊어버렸나요?</p>
            </div>
            <button className="bg-blue w-full h-[52px] rounded-[16px] text-white font-bold text-2lg hover:bg-blue-sub transition-all">
              로그인
            </button>
          </div>
          <div className="flex items-center gap-[16px]">
            <div className="bg-glay50 h-[1px] w-full"></div>
            <span className="text-black">OR</span>
            <div className="bg-glay50 h-[1px] w-full"></div>
          </div>
          <div className="flex justify-center">
            <div>구글</div>
            <div>카카오</div>
          </div>
          <div className="flex justify-center">
            <p>회원이 아니신가요?</p>
            <Link href={"/signup"} className="text-blue font-bold">
              회원가입
            </Link>
          </div>
        </div>
      </div>
      <Image
        src={`/images/HealthyFood.png`}
        alt="healthyFood"
        width={600}
        height={600}
        className="absolute left-[-100px] bottom-[-100px]"
      />
      <Image
        src={`/images/Diet.png`}
        alt="healthyFood"
        width={600}
        height={600}
        className="absolute right-[-100px] bottom-[-100px]"
      />
      <div className="absolute left-0 top-0 right-0 bottom-0 bg-glay10/80 backdrop-blur-xs"></div>
    </div>
  );
}
