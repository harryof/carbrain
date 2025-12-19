export function getRecommendationFromRecords(records = []) {
    if (records.length === 0) {
      return {
        level: "info",
        text: "Нет данных по обслуживанию. Добавьте первую запись.",
      };
    }
  
    const last = records[records.length - 1];
    const type = (last.type || "").toLowerCase();
  
    if (type.includes("масло")) {
      return {
        level: "warn",
        text: "Рекомендуется запланировать следующую замену масла через ~8 000 км.",
      };
    }
  
    if (type.includes("тормоз")) {
      return {
        level: "warn",
        text: "Рекомендуется проверить тормозную систему на ближайшем ТО.",
      };
    }
  
    return {
      level: "ok",
      text: "Автомобиль в эксплуатации. Плановое обслуживание по регламенту.",
    };
  }
  