import Block1 from "@/components/Blocks/Block1";
import Block2 from "@/components/Blocks/Block2";
import Block3 from "@/components/Blocks/Block3";
import BlockLoading from "@/components/Blocks/BlockLoading";
import {Suspense} from "react";

export default function Home() {
  return (
      <div>
        <div>Home</div>
        <Suspense fallback={<BlockLoading/>}>
          <Block1/>
          <Suspense fallback={<BlockLoading/>}>
            <Block2/>
            <Suspense fallback={<BlockLoading/>}>
              <Block3/>
            </Suspense>
          </Suspense>
        </Suspense>
      </div>
  );
}
