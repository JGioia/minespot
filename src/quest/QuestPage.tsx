import { Box } from "../components/Box";
import { Button } from "../components/Button";
import { Stack } from "../components/Stack";

import './QuestPage.css';

export const QuestPage = () => {
  return (
    <Stack className="quest-page">
      <h1>QUESTS</h1>
      <QuestCard
        title="Quest Title"
        description="Example description"
        requirement="$20"
        buttonDisabled={false}
        onComplete={() => {}} />
    </Stack>
  )
};

const QuestCard = ({
  title, 
  description, 
  requirement, 
  buttonDisabled, 
  onComplete
}: {
  title: string;
  description: string;
  requirement: string;
  buttonDisabled: boolean;
  onComplete: () => void;
}) => (
  <Box className="quest-page__card">
    <Stack gap='small'>
      <h2>{title}</h2>
      <div>
        <div>icon</div>
        <div>{description}</div>
      </div>
      <Button disabled={buttonDisabled} onClick={onComplete}>
        complete quest - {requirement}
      </Button>
    </Stack>
  </Box>
);