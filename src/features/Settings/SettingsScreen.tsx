import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useTranslation } from "react-i18next";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/Card/Card";

import "@/i18n/i18n";

const SettingsScreen = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (value) => {
    i18n
      .changeLanguage(value)
      // .then(() => console.log("linguagem alterada"))
      // .catch((error) => console.log(error));
  };

  return (
    <View className="flex-1 bg-slate-300 px-1 py-4 gap-4">
      <Card className="rounded-xl h-2/3">
        <CardHeader className=" items-center bg-red-600">
          <CardTitle className="text-slate-50">{t("Configuracoes")}</CardTitle>
        </CardHeader>

        <CardContent className="p flex-1 p-4">
          <View className="flex-1 items-center">
            <Text className="mb-2 text-[16px] font-extrabold text-slate-800">
              {t("Idioma")}
            </Text>
            <View className="flex-row justify-around gap-2">
              <TouchableOpacity
                className={
                  i18n.language === "pt"
                    ? "bg-slate-600 p-2 rounded-md border flex-1 items-center"
                    : "bg-slate-300 p-2 rounded-md  flex-1 items-center"
                }
                onPress={() => changeLanguage("pt")}
              >
                <Text className="text-slate-50">{t("Portugues")}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                className={
                  i18n.language === "en"
                    ? "bg-slate-600 p-2 rounded-md border flex-1 items-center"
                    : "bg-slate-300 p-2 rounded-md  flex-1 items-center"
                }
                onPress={() => changeLanguage("en")}
              >
                <Text className="text-slate-50">{t("Ingles")}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </CardContent>
      </Card>
      {/* <Card className="rounded-xl h-1/4">
        <CardHeader className="items-center bg-red-600">
          <CardTitle className="text-slate-50">{t("Permissões")}</CardTitle>
        </CardHeader>

        <CardContent className="p-0 flex-1"></CardContent>
      </Card> */}
    </View>
  );
};

export default SettingsScreen;
