import {
  R9dCrewListBlock,
  R9dCrew,
  ImageWrapper,
  Overview,
  TitleContainer,
} from "./R9dCrewList.style";
import "swiper/css";
import LikeButton from "../LikeButton";

interface CrewList {
  currentNumber: number;
  crewRecruitmentId: number;
  title: string;
  content: string;
  image?: string[];
  exerciseKind: string;
}

interface Data {
  data: {
    crewList: CrewList[];
    totalPages: number;
  };
}

interface R9dCrewListProps {
  data?: Data;
  onClickCrew?: (id: number) => void;
}

const R9dCrewList: React.FC<R9dCrewListProps> = ({ data, onClickCrew }) => {
  return (
    <R9dCrewListBlock>
      {data && (
        <R9dCrew
          key={data?.data.crewList[0].crewRecruitmentId}
          onClick={() =>
            onClickCrew && onClickCrew(data?.data.crewList[0].crewRecruitmentId)
          }
        >
          <ImageWrapper>
            <img
              src={
                data?.data.crewList[0].image?.length !== 0 &&
                data?.data.crewList[0].image?.length !== undefined
                  ? data?.data.crewList[0].image[0]
                  : ""
              }
              alt=""
            />
          </ImageWrapper>

          <Overview>
            <div>
              <TitleContainer>
                <p>{data?.data.crewList[0].title}</p>
                <span>15/16</span>
              </TitleContainer>

              <LikeButton />
            </div>

            <p>{data?.data.crewList[0].exerciseKind} / 서울 중구</p>
          </Overview>
        </R9dCrew>
      )}
    </R9dCrewListBlock>
  );
};

export default R9dCrewList;