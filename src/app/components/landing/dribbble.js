export default function AnantaDribbble() {
  return (
    <div class="mb-6 flex">
      <div>
        <div class="recent mb-6">Recent works</div>
        <p class="desc ">
          As a tight-knit team of experts, we create memorable and emotional
          websites, digital experiences, and native apps. Discover the power of
          emotion-driven design with us.
        </p>
      </div>
      <div class="flex flex-col lg:ml-auto relative">
        <img
          src="madeinindia.svg"
          className="h-[11rem] fill-black stroke-black w-[11rem] absolute bottom-[11rem] right-0 rotate-12 lion"
        />
        <div></div>
        <div class="hidden lg:block -mt-10 ml-auto">
          Over 4 thrilling years of experience!
        </div>
        <a
          class="!hidden lg:!block lg:mt-auto"
          href="https://dribbble.com/theananta"
        >
          <div class="flex !gap-4 drible-btn  style_container__ZhG39">
            <span class="initial items-center z-[2] flex gap-2 ">
              <div autoplay="" class=" w-8">
                <img src="dribble.svg" />
              </div>
              Ananta&apos;s Dribbble
            </span>
            <span
              aria-hidden="true"
              class="secondary  h-full z-[2] flex gap-2 items-center"
            >
              <div autoplay="" class=" w-8">
                <img src="dribble.svg" />
              </div>
              Ananta&apos;s Dribbble
            </span>
            <span class="flex !gap-4 drible-btn  !mb-0 bg-box absolute !w-full h-full"></span>
          </div>
        </a>
      </div>
    </div>
  );
}
