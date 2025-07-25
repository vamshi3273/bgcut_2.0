import { cva, type VariantProps } from 'class-variance-authority';
import { CheckIcon, XIcon, ChevronDown, WandSparkles } from 'lucide-react';
import * as React from 'react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Separator } from '@/components/ui/separator';

import { cn } from '@/lib/utils';

/**
 * Variants for the multi-select component to handle different styles.
 * Uses class-variance-authority (cva) to define different styles based on "variant" prop.
 */
const multiSelectVariants = cva('m-1 transition', {
  variants: {
    variant: {
      default: 'border-foreground/10 text-foreground bg-card hover:bg-card/80',
      secondary:
        'border-foreground/10 bg-secondary text-secondary-foreground hover:bg-secondary/80',
      destructive:
        'border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80',
      inverted: 'inverted',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

/**
 * Props for MultiSelect component
 */
interface MultiSelectProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof multiSelectVariants> {
  /**
   * An array of option objects to be displayed in the multi-select component.
   * Each option object has a label, value, and an optional icon.
   */
  options: {
    /** The text to display for the option. */
    label: string;
    /** The unique value associated with the option. */
    value: string;
    /** Optional icon component to display alongside the option. */
    icon?: React.ComponentType<{ className?: string }>;
  }[];

  /**
   * Callback function triggered when the selected values change.
   * Receives an array of the new selected values.
   */
  onValueChange: (value: string[]) => void;

  /** The default selected values when the component mounts. */
  value?: string[];

  /**
   * Placeholder text to be displayed when no values are selected.
   * Optional, defaults to "Select options".
   */
  placeholder?: string;

  /**
   * Animation duration in seconds for the visual effects (e.g., bouncing badges).
   * Optional, defaults to 0 (no animation).
   */
  animation?: number;

  /**
   * Maximum number of items to display. Extra selected items will be summarized.
   * Optional, defaults to 3.
   */
  maxCount?: number;

  /**
   * The modality of the popover. When set to true, interaction with outside elements
   * will be disabled and only popover content will be visible to screen readers.
   * Optional, defaults to false.
   */
  modalPopover?: boolean;

  /**
   * Additional class names to apply custom styles to the multi-select component.
   * Optional, can be used to add custom styles.
   */
  className?: string;

  optionsClassName?: string;
}

export const MultiSelect = React.forwardRef<HTMLButtonElement, MultiSelectProps>(
  (
    {
      options,
      onValueChange,
      variant,
      placeholder = 'Select options',
      animation = 0,
      maxCount = 3,
      modalPopover = false,
      className,
      value = [],
      optionsClassName,
      ...props
    },
    ref,
  ) => {
    const [isPopoverOpen, setIsPopoverOpen] = React.useState(false);
    const [isAnimating, setIsAnimating] = React.useState(false);

    const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') {
        setIsPopoverOpen(true);
      } else if (event.key === 'Backspace' && !event.currentTarget.value) {
        const newSelectedValues = [...value];
        newSelectedValues.pop();
        onValueChange(newSelectedValues);
      }
    };

    const toggleOption = (option: string) => {
      const newSelectedValues = value.includes(option)
        ? value.filter((value) => value !== option)
        : [...value, option];
      onValueChange(newSelectedValues);
    };

    const handleClear = () => {
      onValueChange([]);
    };

    const handleTogglePopover = () => {
      setIsPopoverOpen((prev) => !prev);
    };

    const clearExtraOptions = () => {
      const newSelectedValues = value.slice(0, maxCount);
      onValueChange(newSelectedValues);
    };

    const toggleAll = () => {
      if (value.length === options.length) {
        handleClear();
      } else {
        const allValues = options.map((option) => option.value);
        onValueChange(allValues);
      }
    };

    return (
      <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen} modal={modalPopover}>
        <PopoverTrigger asChild>
          <Button
            ref={ref}
            {...props}
            onClick={handleTogglePopover}
            className={cn(
              '!bg-card flex h-auto min-h-10 w-full items-center justify-between rounded-md border p-1 hover:bg-inherit [&_svg]:pointer-events-auto',
              className,
            )}
          >
            {value.length > 0 ? (
              <div className="flex w-full items-center justify-between">
                <div className="flex flex-wrap items-center">
                  {value.slice(0, maxCount).map((value) => {
                    const option = options.find((o) => o.value === value);
                    const IconComponent = option?.icon;

                    return (
                      <Badge key={value} className={cn(multiSelectVariants({ variant }), 'pr-1')}>
                        {IconComponent && <IconComponent className="mr-2 h-4 w-4" />}
                        {option?.label}
                        <div
                          className="flex !size-4 items-center justify-center"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            toggleOption(value);
                          }}
                        >
                          <XIcon className="!size-3 cursor-pointer" />
                        </div>
                      </Badge>
                    );
                  })}
                  {value.length > maxCount && (
                    <Badge
                      className={cn(
                        'text-foreground border-foreground/1 bg-transparent hover:bg-transparent',
                        isAnimating ? 'animate-bounce' : '',
                        multiSelectVariants({ variant }),
                      )}
                      style={{ animationDuration: `${animation}s` }}
                    >
                      {`+ ${value.length - maxCount} more`}
                      <div
                        className="flex !size-4 items-center justify-center"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          clearExtraOptions();
                        }}
                      >
                        <XIcon className="!size-3 cursor-pointer" />
                      </div>
                    </Badge>
                  )}
                </div>
                <div className="flex items-center justify-between">
                  <XIcon
                    className="text-muted-foreground mx-2 h-4 cursor-pointer"
                    onClick={(event) => {
                      event.stopPropagation();
                      handleClear();
                    }}
                  />
                  <Separator orientation="vertical" className="flex h-full min-h-6" />
                  <ChevronDown className="text-muted-foreground mx-2 h-4 cursor-pointer" />
                </div>
              </div>
            ) : (
              <div className="mx-auto flex w-full items-center justify-between">
                <span className="text-muted-foreground mx-3 text-sm">{placeholder}</span>
                <ChevronDown className="text-muted-foreground mx-2 h-4 cursor-pointer" />
              </div>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className={cn('w-[var(--radix-popover-trigger-width)] p-0', optionsClassName)}
          align="start"
          onEscapeKeyDown={() => setIsPopoverOpen(false)}
        >
          <Command>
            <CommandInput
              className="!h-10"
              placeholder="Search..."
              onKeyDown={handleInputKeyDown}
            />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup>
                <CommandItem key="all" onSelect={toggleAll} className="cursor-pointer">
                  <div
                    className={cn(
                      'border-foreground flex size-[17px] shrink-0 items-center justify-center rounded-[5px] border',
                      value.length === options.length
                        ? 'bg-primary text-primary-foreground border-primary'
                        : 'opacity-50 [&_svg]:invisible',
                    )}
                  >
                    <CheckIcon className="text-primary-foreground size-3" />
                  </div>
                  <span>(Select All)</span>
                </CommandItem>
                {options.map((option) => {
                  const isSelected = value.includes(option.value);

                  return (
                    <CommandItem
                      key={option.value}
                      onSelect={() => toggleOption(option.value)}
                      className="cursor-pointer"
                    >
                      <div
                        className={cn(
                          'border-foreground flex size-[17px] shrink-0 items-center justify-center rounded-[5px] border',
                          isSelected
                            ? 'bg-primary text-primary-foreground border-primary'
                            : 'opacity-50 [&_svg]:invisible',
                        )}
                      >
                        <CheckIcon className="text-primary-foreground size-3" />
                      </div>
                      {option.icon && (
                        <option.icon className="text-muted-foreground mr-2 h-4 w-4" />
                      )}
                      <span>{option.label}</span>
                    </CommandItem>
                  );
                })}
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup className="p-0">
                <div className="flex items-center justify-between">
                  {value.length > 0 && (
                    <>
                      <CommandItem
                        onSelect={handleClear}
                        className="flex-1 cursor-pointer justify-center rounded-none p-2.5"
                      >
                        Clear
                      </CommandItem>
                      <Separator orientation="vertical" className="flex h-full min-h-6" />
                    </>
                  )}
                  <CommandItem
                    onSelect={() => setIsPopoverOpen(false)}
                    className="max-w-full flex-1 cursor-pointer justify-center rounded-none p-2.5"
                  >
                    Close
                  </CommandItem>
                </div>
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
        {animation > 0 && value.length > 0 && (
          <WandSparkles
            className={cn(
              'text-foreground bg-background my-2 h-3 w-3 cursor-pointer',
              isAnimating ? '' : 'text-muted-foreground',
            )}
            onClick={() => setIsAnimating(!isAnimating)}
          />
        )}
      </Popover>
    );
  },
);

MultiSelect.displayName = 'MultiSelect';
