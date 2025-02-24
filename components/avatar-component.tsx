import React, { Component } from 'react'
import { Button as ButtonMovingBorder } from "@/components/ui/moving-border";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default class AvatarComponent extends Component {
  render() {
    return (
        <ButtonMovingBorder
            borderRadius="4rem"
            className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
        >
            <Avatar className="w-32 h-32">
                <AvatarImage src="https://avatars.githubusercontent.com/u/64715936?v=4" />
                <AvatarFallback>GH</AvatarFallback>
            </Avatar>
        </ButtonMovingBorder>
    )
  }
}
