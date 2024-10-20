import { H2, H4 } from '../../../components/styled/Typography';
import Navbar from '../../../main/containers/navbar/Navbar';
import SubNavbar from '../components/SubNavbar';

const HeaderSection = () => {
  return (
    <main className="relative">
      <img
        src="/assets/images/background.png"
        alt="background"
        className="absolute top-0 left-0 w-screen h-screen object-cover z-[-1]"
      />
      <Navbar />
      <SubNavbar />
      <div className="flex items-center justify-between gap-[8%] h-[160px] px-[10%]">
        {'ATIRA'.split('').map((item) => {
          return <h1 className="text-white text-[230px] pt-[25px]">{item}</h1>;
        })}
      </div>
      <div className="h-[120px]  mt-[80px] pl-[10%]">
        <div className="h-[120px] grid grid-cols-[5vw,30vw,40vw] pt-[30px] bg-blur">
          <div />
          <div className="grid grid-cols-2">
            <div>
              <H4 $variant="green">01</H4>
              <H2 $variant="white" className="mt-3">
                PROMO
              </H2>
            </div>
            <div>
              <H4 $variant="green">02</H4>
              <H2 $variant="white" className="mt-3">
                animation
              </H2>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div>
              <H4 $variant="green">03</H4>
              <H2 $variant="white" className="mt-3">
                tv adverticement
              </H2>
            </div>
            <div>
              <H4 $variant="green">04</H4>
              <H2 $variant="white" className="mt-3">
                content marketing
              </H2>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeaderSection;
