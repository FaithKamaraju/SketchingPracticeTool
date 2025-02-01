import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";

import "./ControlPanel.css";

function ControlPanel() {
  return (
    <Stack gap={3}>
      <div>
        <Button className="control-panel-button" size="lg">
          Block level button
        </Button>
      </div>
      <div>
        <Button className="control-panel-button" size="lg">
          Block level button
        </Button>
      </div>
    </Stack>
  );
}

export default ControlPanel;
