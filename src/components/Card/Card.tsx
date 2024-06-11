import React, { forwardRef } from "react";
import { View, Text, ViewProps, TextProps } from "react-native";


const Card = forwardRef<View, ViewProps>(({ className, ...props }, ref) => (
  <View
    ref={ref}
    className="rounded-t-3xl shadow-md shadow-black bg-slate-100 text-slate-950"
    {...props}
  />
));

const CardHeader = forwardRef<View, ViewProps>(
  ({ className, ...props }, ref) => (
    <View
      ref={ref}
      className="p-3 bg-slate-100 shadow-md shadow-black rounded-t-3xl"
      {...props}
    />
  )
);

const CardTitle = forwardRef<Text, TextProps>(
  ({ className, ...props }, ref) => (
    <Text
      ref={ref}
      className="text-base font-semibold tracking-tight"
      {...props}
    />
  )
);

const CardDescription = forwardRef<Text, TextProps>(
  ({ className, ...props }, ref) => (
    <Text
      ref={ref}
      className="text-sm text-slate-500"
      {...props}
    />
  )
);

const CardContent = forwardRef<View, ViewProps>(
  ({ className, ...props }, ref) => (
    <View ref={ref} className="p-3" {...props} />
  )
);

const CardFooter = forwardRef<View, ViewProps>(
  ({ className, ...props }, ref) => (
    <View
      ref={ref}
      className="flex items-center p-3 pt-0"
      {...props}
    />
  )
);

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
