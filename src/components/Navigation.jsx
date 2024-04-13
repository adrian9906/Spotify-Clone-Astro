import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ToolTip";

export const ArrowPrevious = () => {
  return (
    <svg
      role="img"
      fill="currentColor"
      height="16"
      width="16"
      aria-hidden="true"
      aria-label="Anterior"
      viewBox="0 0 16 16"
    >
      <path d="M11.03.47a.75.75 0 0 1 0 1.06L4.56 8l6.47 6.47a.75.75 0 1 1-1.06 1.06L2.44 8 9.97.47a.75.75 0 0 1 1.06 0z"></path>
    </svg>
  );
};

export const ArrowNext = () => {
  return (
    <svg
      role="img"
      fill="currentColor"
      height="16"
      width="16"
      aria-hidden="true"
      aria-label="Siguiente"
      viewBox="0 0 16 16"
    >
      <path d="M4.97.47a.75.75 0 0 0 0 1.06L11.44 8l-6.47 6.47a.75.75 0 1 0 1.06 1.06L13.56 8 6.03.47a.75.75 0 0 0-1.06 0z"></path>
    </svg>
  );
};

export const Notification = () => {
  return (
    <svg
      fill="currentColor"
      height="16"
      width="16"
      role="img"
      aria-label="Notificaciones"
      aria-hidden="true"
      viewBox="0 0 16 16"
    >
      <path d="M8 1.5a4 4 0 0 0-4 4v3.27a.75.75 0 0 1-.1.373L2.255 12h11.49L12.1 9.142a.75.75 0 0 1-.1-.374V5.5a4 4 0 0 0-4-4zm-5.5 4a5.5 5.5 0 0 1 11 0v3.067l2.193 3.809a.75.75 0 0 1-.65 1.124H10.5a2.5 2.5 0 0 1-5 0H.957a.75.75 0 0 1-.65-1.124L2.5 8.569V5.5zm4.5 8a1 1 0 1 0 2 0H7z"></path>
    </svg>
  );
};

export default function NavegationComponent() {
  const handleClickBack = () => {
      history.back()
  }
  const handleClickNext = () => {
      history.forward()
  }

  return (
      <div className="mb-4 flex justify-between">
          <div className="text-white flex gap-2 ">
          <TooltipProvider delayDuration={300}>
              <Tooltip>
                <TooltipTrigger>
                <button onClick={handleClickBack} className="bg-zinc-900/60 py-3 w-8 h-8 p-2 rounded-full">
                  <ArrowPrevious />
              </button>
                </TooltipTrigger>
                <TooltipContent className="bg-gray-900">
                  <p>Back</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider delayDuration={300}>
              <Tooltip>
                <TooltipTrigger>
                <button onClick={handleClickNext} className="bg-zinc-900/60 py-3 w-8 h-8 p-2 rounded-full">
                  <ArrowNext />
              </button>
                </TooltipTrigger>
                <TooltipContent className="bg-gray-900">
                  <p>Next</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

              
          </div>

          <div className="flex gap-2 ">
          <TooltipProvider delayDuration={300}>
              <Tooltip>
                <TooltipTrigger>
                <button className="bg-zinc-900/60 py-2 w-8 h-8 p-2 rounded-full relative">
                  <span className="absolute top-0 right-0 w-2 h-2 bg-[#3b72b5] rounded-full"></span>
                  <Notification/>
              </button>
                </TooltipTrigger>
                <TooltipContent className="bg-gray-900">
                  <p>Notifications</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider delayDuration={300}>
              <Tooltip>
                <TooltipTrigger>
                <button className="bg-zinc-900/60  w-8 h-8 rounded-full">
                  <Avatar>
                      <AvatarImage className="w-7 h-7 object-cover object-center rounded-full m-auto" src="/onePiece.jpg" />
                      <AvatarFallback>Adrian Daniel</AvatarFallback>
                  </Avatar>
              </button>
                </TooltipTrigger>
                <TooltipContent className="bg-gray-900">
                  <p>Adrian Daniel</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
              
          </div>
      </div>
  )
}