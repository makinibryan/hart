import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
    AllDomesticsComponent,
    AllMountainsComponent,
    MountainFourDaysClimbingSirimonRouteComponent,
    MountainFiveDaysClimbingSirimonNaroMoroRouteComponent,
    MountainSixDaysClimbingChogoriaEasyPaceRouteComponent,
    AllSafarisComponent,
    SafariThreeDaysTheHemmingwayTrailComponent,
    SafariFourDaysMaasaiMaraNakuruComponent,
    SafariFiveDaysMaasaiMaraLakeNakuruComponent,
    SafariSixDaysMaasaiMaraLakeNakuruBaringoComponent,
    SafariSevenDaysMaasaiMaraSamburuComponent,
    SafariEightDaysTurkanaSpecialComponent,
    SafariNineDaysMaasaiMaraKisumuAmboseliComponent,
    SafariTheGreatMaraThreeDaysAndTwoNightsComponent,
    AllBeachesComponent,
    BeachAfroChicDianiBeachComponent,
    BeachEnglishPointMarinaComponent,
    BeachLeopardBeachResortComponent,
    BeachNeptuneBeachResortComponent,
    BeachPrideInnExpressResortComponent,
    AllDayTripsComponent,
    DayBomasOfKenyaComponent,
    DayGreatRiftValleyLakeNakuruComponent,
    DayKarenBlixenAndGiraffeCenterComponent,
    DayNairobiCityTourComponent,
    DayNairobiNationalParkComponent,
    ToursInfoComponent,
    SafariTheGreatMaraElevenDaysAndTenNightsComponent,
    SafariHomeOfTheBigNineDaysAndEightNightsComponent,
    SafariBreathtakingWondersOfKenyaComponent,
    SafariReconnectWithNatureSevenDaysAndSixNightsComponent,
    SafariGreatLakesSixDaysAndFiveNightsComponent,
    SafariTheGreatMaraAndAmboseliSixDaysAndFiveNightsComponent,
    SafariLandGiantsFiveDaysAndFourNightsComponent,
    SafariMagnificentExcursionsFiveDaysAndFourNightsComponent,
    SafariHomeOfTheWildElephantThreeDaysAndTwoNightsComponent,
    SafariBushAndLakeComponent
} from './components';

const routes: Routes = [
    {
        path: '',
        component: AllDomesticsComponent
    },
    {
        path: 'mountains',
        component: AllMountainsComponent
    },
    {
        path: 'four-days-mountain-climbing-sirimon-route-direct',
        component: MountainFourDaysClimbingSirimonRouteComponent
    },
    {
        path: 'five-days-mountain-climbing-sirimon-out-naro-moro-contrast-route',
        component: MountainFiveDaysClimbingSirimonNaroMoroRouteComponent
    },
    {
        path: 'six-days-mountain-climbing-chogoria-easy-pace',
        component: MountainSixDaysClimbingChogoriaEasyPaceRouteComponent
    },
    {
        path: 'safaris',
        component: AllSafarisComponent
    },
    {
        path: 'three-days-hemmingway-trail',
        component: SafariThreeDaysTheHemmingwayTrailComponent
    },
    {
        path: 'four-days-maasai-mara-safari',
        component: SafariFourDaysMaasaiMaraNakuruComponent
    },
    {
        path: 'five-days-maasai-mara-safari',
        component: SafariFiveDaysMaasaiMaraLakeNakuruComponent
    },
    {
        path: 'six-days-maasai-mara-safari',
        component: SafariSixDaysMaasaiMaraLakeNakuruBaringoComponent
    },
    {
        path: 'seven-days-maasai-mara-safari',
        component: SafariSevenDaysMaasaiMaraSamburuComponent
    },
    {
        path: 'eight-days-turkana-special',
        component: SafariEightDaysTurkanaSpecialComponent
    },
    {
        path: 'nine-days-maasai-mara-safari',
        component: SafariNineDaysMaasaiMaraKisumuAmboseliComponent
    },
    {
        path: 'beaches',
        component: AllBeachesComponent
    },
    {
        path: 'afrochic-diani-beach',
        component: BeachAfroChicDianiBeachComponent
    },
    {
        path: 'english-point-beach',
        component: BeachEnglishPointMarinaComponent
    },
    {
        path: 'leopard-beach',
        component: BeachLeopardBeachResortComponent
    },
    {
        path: 'neptune-beach',
        component: BeachNeptuneBeachResortComponent
    },
    {
        path: 'prideinn-express-beach',
        component: BeachPrideInnExpressResortComponent
    },
    {
        path: 'beaches',
        component: AllBeachesComponent
    },
    {
        path: 'afrochic-diani-beach',
        component: BeachAfroChicDianiBeachComponent
    },
    {
        path: 'english-point-beach',
        component: BeachEnglishPointMarinaComponent
    },
    {
        path: 'leopard-beach',
        component: BeachLeopardBeachResortComponent
    },
    {
        path: 'neptune-beach',
        component: BeachNeptuneBeachResortComponent
    },
    {
        path: 'prideinn-express-beach',
        component: BeachPrideInnExpressResortComponent
    },
    {
        path: 'day-trips',
        component: AllDayTripsComponent
    },
    {
        path: 'bomas-kenya-tour',
        component: DayBomasOfKenyaComponent
    },
    {
        path: 'great-riftvalley-lake-nakuru-tour',
        component: DayGreatRiftValleyLakeNakuruComponent
    },
    {
        path: 'karen-blixen-and-giraffee-centre-tour',
        component: DayKarenBlixenAndGiraffeCenterComponent
    },
    {
        path: 'nairobi-city-tour',
        component: DayNairobiCityTourComponent
    },
    {
        path: 'national-park-tour',
        component: DayNairobiNationalParkComponent
    },
    {
        path: 'tours-info',
        component: ToursInfoComponent
    },
    {
        path: 'safari-the-great-mara-three-days-and-two-nights',
        component: SafariTheGreatMaraThreeDaysAndTwoNightsComponent
    },
    {
        path: 'safari-the-great-mara-eleven-days-and-ten-nights',
        component: SafariTheGreatMaraElevenDaysAndTenNightsComponent
    },
    {
        path: 'safari-home-of-the-big-nine-days-and-eight-nights',
        component: SafariHomeOfTheBigNineDaysAndEightNightsComponent
    }, {
        path: 'safari-breathtaking-wonders-of-kenya-eight-days-and-seven-nights',
        component: SafariBreathtakingWondersOfKenyaComponent
    },
    {
        path: 'safari-reconnect-with-nature-seven-days-and-six-nights',
        component: SafariReconnectWithNatureSevenDaysAndSixNightsComponent
    },
    {
        path: 'safari-great-lakes-six-days-and-five-nights',
        component: SafariGreatLakesSixDaysAndFiveNightsComponent
    }, {
        path: 'safari-the-great-mara-and-amboseli-six-days-and-five-nights',
        component: SafariTheGreatMaraAndAmboseliSixDaysAndFiveNightsComponent
    }, {
        path: 'safari-land-giants-five-days-and-four-nights',
        component: SafariLandGiantsFiveDaysAndFourNightsComponent
    },
    {
        path: 'safari-magnificent-excursions-five-days-and-four-nights',
        component: SafariMagnificentExcursionsFiveDaysAndFourNightsComponent
    },
    {
        path: 'safari-home-of-the-wild-elephant-three-days-and-two-nights',
        component: SafariHomeOfTheWildElephantThreeDaysAndTwoNightsComponent
    },
    {
        path: 'safari-bush-and-lake',
        component: SafariBushAndLakeComponent
    }
];

@NgModule({
    imports: [ RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DomesticRoutingModule{
}