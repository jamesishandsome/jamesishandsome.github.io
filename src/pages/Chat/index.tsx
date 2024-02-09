import { Avatar, FloatButton, Modal } from 'antd';
import { Input } from 'antd';
import { Button } from 'react95';
import { useRef, useState } from 'react';
import type { DraggableData, DraggableEvent } from 'react-draggable';
import Draggable from 'react-draggable';
const { TextArea } = Input;

const Chat = () => {
  const [open, setOpen] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [bounds, setBounds] = useState({
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
  });
  const draggleRef = useRef<HTMLDivElement>(null);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = (e: React.MouseEvent<HTMLElement>) => {
    console.log(e);
    setOpen(false);
  };

  const handleCancel = (e: React.MouseEvent<HTMLElement>) => {
    console.log(e);
    setOpen(false);
  };
  const onStart = (_event: DraggableEvent, uiData: DraggableData) => {
    const { clientWidth, clientHeight } = window.document.documentElement;
    const targetRect = draggleRef.current?.getBoundingClientRect();
    if (!targetRect) {
      return;
    }
    setBounds({
      left: -targetRect.left + uiData.x,
      right: clientWidth - (targetRect.right - uiData.x),
      top: -targetRect.top + uiData.y,
      bottom: clientHeight - (targetRect.bottom - uiData.y),
    });
  };
  return (
    <>
      <FloatButton
        onClick={() => {
          setOpen(true);
        }}
        tooltip={<div>Chat with virtual me</div>}
      />
      <Modal
        title={
          <div
            style={{
              width: '100%',
              cursor: 'move',
            }}
            onMouseOver={() => {
              if (disabled) {
                setDisabled(false);
              }
            }}
            onMouseOut={() => {
              setDisabled(true);
            }}
            // fix eslintjsx-a11y/mouse-events-have-key-events
            // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/mouse-events-have-key-events.md
            onFocus={() => {}}
            onBlur={() => {}}
            // end
          >
            Draggable Modal
          </div>
        }
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={false}
        modalRender={(modal) => (
          <Draggable
            disabled={disabled}
            bounds={bounds}
            nodeRef={draggleRef}
            onStart={(event, uiData) => onStart(event, uiData)}
          >
            <div ref={draggleRef}>{modal}</div>
          </Draggable>
        )}
      >
        <div className="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800 max-w-md">
          <div className="grid grid-cols-2">
            <div className="flex items-center p-2 space-x-2 border-b border-gray-200 dark:border-gray-800">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <div className="flex items-center space-x-2"></div>
            </div>
            <div className="flex items-center p-2 space-x-2 border-b border-gray-200 dark:border-gray-800">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <div className="flex items-center space-x-2"></div>
            </div>
          </div>
          <div className="p-2 grid gap-2">
            <div className="flex items-start space-x-2 justify-end">
              <div className="rounded-lg p-2 bg-green-500 text-xs text-white dark:bg-green-600">
                Hey! How's it going?
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <div className="rounded-lg p-2 bg-gray-100 text-xs dark:bg-gray-850">
                It's going great! Just working on some cool stuff.
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <div className="rounded-lg p-2 bg-gray-100 text-xs dark:bg-gray-850">
                Same here! We should catch up later.
              </div>
            </div>
          </div>
          <div className="p-2 border-t border-gray-200 dark:border-gray-800">
            <form className="flex space-x-2">
              <TextArea className="flex-1" placeholder="Type a message..." />
              <Button size="sm" type="submit">
                Send
              </Button>
            </form>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Chat;
