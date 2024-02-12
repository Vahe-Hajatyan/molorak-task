#include "stdio.h"
#include <stdlib.h>
#include <string.h>

typedef struct Country
{
    char name[50];
    int peopleCount;
} country;

typedef struct Continent
{
    char name[50];
    country countries[2];
} continent;

typedef struct Planet
{
    struct Continent continents[2];
} planet;

int randomPeopleCount()
{
    return ((rand() % 5) + 5);
}

void changeDate(planet *earth, int or)
{

    char timeOfDate[10];
    char timeOfNotActiveDate[10];

    if (or % 2 == 0)
    {
        strcpy(timeOfDate, "night");
        strcpy(timeOfNotActiveDate, "morning");
    }
    else
    {
        strcpy(timeOfDate, "morning");
        strcpy(timeOfNotActiveDate, "night");
    }

    int indexForActiveDate = (or / 2) % 2;

    char *activeDate = earth->continents[indexForActiveDate].name;

    char *notActiveDate = earth->continents[1 - indexForActiveDate].name;

    printf("or %d: %s a %s, %s a %s\n", or +1, timeOfDate, activeDate, timeOfNotActiveDate, notActiveDate);
    FILE *file = fopen("data.txt", "a");
    fprintf(file, "or %d: %s a %s, %s a %s\n", or +1, timeOfDate, activeDate, timeOfNotActiveDate, notActiveDate);
    fclose(file);
}
int main()
{
    country country_1_1 = {"country_1_1", randomPeopleCount()};
    country country_1_2 = {"country_1_2", randomPeopleCount()};
    country country_2_1 = {"country_2_1", randomPeopleCount()};
    country country_2_2 = {"country_2_2", randomPeopleCount()};

    continent continent_1 = {"continent_1", {country_1_1, country_1_2}};
    continent continent_2 = {"continent_2", {country_2_1, country_2_2}};

    planet earth = {{continent_1, continent_2}};
    for (int day = 0; day < 10; ++day)
    {
        changeDate(&earth, day);
    }
    return 0;
}