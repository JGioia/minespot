import { useDispatch, useSelector } from "react-redux";
import { Box } from "../components/Box";
import { Button } from "../components/Button";
import { Inline } from "../components/Inline";
import { Stack } from "../components/Stack";

import './QuestPage.css';
import quests from "./quests.json";
import { IRootState } from "../redux/store";
import { useCallback, useMemo } from "react";
import { incrementQuest1, incrementQuest2, setMoney } from "../redux/reducer";

export const QuestPage = () => {
  const questIndex1 = useSelector((state: IRootState) => state.list1Quest);
  const questIndex2 = useSelector((state: IRootState) => state.list2Quest);
  return (
    <Stack className="quest-page" gap="large">
      <h1>QUESTS</h1>
      <Stack gap='large'>
        <QuestCard
          questList={1} />
        <QuestCard
          questList={2} />
      </Stack>
      <h2>Quests Completed: {questIndex1 + questIndex2}</h2>
    </Stack>
  )
};

const QuestCard = ({
  questList
}: {
  questList: 1 | 2;
}) => {
  const questIndex = useSelector((state: IRootState) => 
    questList === 1 ? state.list1Quest : state.list2Quest);
  console.log("quest shit");
  console.log(questList);
  console.log(questIndex);
  const quest = questList === 1 ? 
    quests.list1[questIndex] : 
    quests.list2[questIndex];
  const { title, description, requirement, onComplete } = quest;

  const money = useSelector((state: IRootState) => state.money);
  const earthCheese = useSelector((state: IRootState) => state.earthCheese);
  const dispatch = useDispatch();

  const requirementText = useMemo(() => {
    let result = "";
    if ("earthCheese" in requirement) {
      result += requirement.earthCheese + " 🧀";
    }
    if ("money" in requirement) {
      result += requirement.money + " 💵";
    }
    if ("moonCheese" in requirement) {
      result += requirement.moonCheese + " 🌕";
    }
    return result;
  }, [requirement]);

  const buttonDisabled = useMemo(() => (
    // @ts-expect-error: TS can't infer type
    ("earthCheese" in requirement && earthCheese < requirement.earthCheese) ||
    // @ts-expect-error: TS can't infer type
    ("money" in requirement && earthCheese < requirement.money)
    // TODO: add moon cheese
  ), [requirement, earthCheese]);

  const onCompleteAction = useCallback(() => {
    if ("money" in onComplete) {
      // @ts-expect-error: TS can't infer type
      dispatch(setMoney(money + onComplete.money));
    }
    if ("unlock" in onComplete) {
      // TODO
    }
    dispatch(questIndex === 1 ? incrementQuest1() : incrementQuest2());
  }, [onComplete, dispatch, money, questIndex]);

  const showCard = useMemo(() => title !== "", [title]);

  return showCard ? (
    <Box className="quest-page__card" padding="large">
      <Stack gap='large'>
        <h2>{title}</h2>
        <Inline>
          <h1>💵</h1>
          <div>{description}</div>
        </Inline>
        <Button disabled={buttonDisabled} onClick={onCompleteAction}>
          complete quest - {requirementText}
        </Button>
      </Stack>
    </Box>
  ) : null
};