import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/Card/Card";
import { KeyboardAvoiding } from "@/components/KeyboardAvoidingView/KeyboardAvoidingView";
import Feather from "@expo/vector-icons/Feather";

import { View, SafeAreaView, TouchableOpacity } from "react-native";

interface ModalLayoutProps {
  title: string;
  titleActions?: React.ReactNode;
  children: React.ReactNode;
  fullScreen?: boolean;
  onClose: () => void;
}

const ModalLayout = ({
  title,
  titleActions,
  children,
  fullScreen,
  onClose,
}: ModalLayoutProps) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <KeyboardAvoiding>
      <SafeAreaView className="flex-1 bg-blue-400 pt-4">
        <Card className={fullScreen && "flex-1"}>
          <CardHeader className="flex-row justify-between items-center">
            <CardTitle>{title}</CardTitle>

            <TouchableOpacity activeOpacity={0.6} onPress={handleClose}>
              <Feather name="x" size={20} color="rgb(51 65 85)" />
            </TouchableOpacity>
          </CardHeader>

          <CardContent className={fullScreen && "flex-1 p-0"}>
            {titleActions && (
              <View className="bg-slate-100 border-b border-slate-200 ">
                {titleActions}
              </View>
            )}
            <View className={fullScreen && "flex-1"}>{children}</View>
          </CardContent>
        </Card>
      </SafeAreaView>
    </KeyboardAvoiding>
  );
};

export default ModalLayout;
