export type RootStackParamList = {
    Categories: undefined;
    MealOverview: {
        categoryId: string;
    };
    MealDetail: {
        mealId: string;
    };
};

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList {}
    }
}
