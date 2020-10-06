import { Component, NgModule } from '@angular/core';
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
    SafariBushAndLakeComponent,
    DayKiccAndTownCenterComponent,
    FortJesusOldTownMambaVillageCenterComponent,
    DayHallerParkAndNguuniWildlifeSanctuaryComponent,
    DayTripToHellsGateNationalParkComponent,
    DayLakeNakuruNationalParkComponent,
    DayLakeBogoriaNationalReserveComponent,
    DayMtLongonotNationalParkComponent,
    DayFourteenFallsComponent,
    AllPrivateSafarisComponent,
    AllGroupSafarisComponent,
    GroupSafariThreeDaysTheHemmingwayTrailComponent,
    GroupSafariFourDaysMaasaiMaraNakuruComponent,
    GroupSafariFiveDaysMaasaiMaraLakeNakuruComponent,
    GroupSafariSixDaysMaasaiMaraLakeNakuruBaringoComponent,
    GroupSafariSevenDaysMaasaiMaraSamburuComponent,
    GroupSafariEightDaysTurkanaSpecialComponent,
    GroupSafariNineDaysMaasaiMaraKisumuAmboseliComponent,
    GroupSafariTheGreatMaraThreeDaysAndTwoNightsComponent,
    GroupSafariTheGreatMaraElevenDaysAndTenNightsComponent,
    GroupSafariHomeOfTheBigNineDaysAndEightNightsComponent,
    GroupSafariBreathtakingWondersOfKenyaComponent,
    GroupSafariReconnectWithNatureSevenDaysAndSixNightsComponent,
    GroupSafariGreatLakesSixDaysAndFiveNightsComponent,
    GroupSafariTheGreatMaraAndAmboseliSixDaysAndFiveNightsComponent,
    GroupSafariLandGiantsFiveDaysAndFourNightsComponent,
    GroupSafariMagnificentExcursionsComponent,
    GroupSafariHomeOfTheWildElephantComponent,
    GroupSafariBushAndLakeComponent,
    GroupSafariFourDayMarsabitChalbiDesertAndSamburu,
    BeachTurtleBayComponent,
    AllGetawaysComponent,
    PackageMaraLeisureCampComponent,
    PackageMileleResortNakuruComponent,
    PackageTheWinstonHotelComponent, 
    PackageAberdareCountyClubComponent, 
    PackageSerenaHotelsComponent

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
        // For now private safaris will be mapped to AllSafaris
        path: 'private-safaris',
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
        path: 'turtle-bay',
        component: BeachTurtleBayComponent
    },
    {
        path: 'aberdare-county-club',
        component: PackageAberdareCountyClubComponent
    },
    {
        path: 'mara-leisure-camp',
        component: PackageMaraLeisureCampComponent
    },
    {
        path: 'milele-resort-nakuru',
        component: PackageMileleResortNakuruComponent
    },
    {
        path: 'the-winston-hotel',
        component: PackageTheWinstonHotelComponent
    },
    {
        path: 'serena-hotels',
        component: PackageSerenaHotelsComponent
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
    },
    {
        path: 'kicc-and-town-center',
        component: DayKiccAndTownCenterComponent
    },
    {
        path: 'fort-jesus-old-town-elephant-tusks-and-mamba-village-center',
        component: FortJesusOldTownMambaVillageCenterComponent
    },
    {
        path: 'haller-park-and-nguuni-wildlife-sanctuary',
        component: DayHallerParkAndNguuniWildlifeSanctuaryComponent
    },
    {
        path: 'hells-gate-national-park',
        component: DayTripToHellsGateNationalParkComponent
    },
    {
        path: 'lake-nakuru-national-park',
        component: DayLakeNakuruNationalParkComponent
    },
    {
        path: 'lake-bogoria-national-reserve',
        component: DayLakeBogoriaNationalReserveComponent
    },
    {
        path: 'mt-longonot-national-park',
        component: DayMtLongonotNationalParkComponent
    },
    {
        path: 'fourteen-falls',
        component: DayFourteenFallsComponent
    },
    {
        path: 'group-safaris',
        component: AllGroupSafarisComponent
    },
    {
        path: 'group-safari-breathtaking-eight-days-and-seven-nights',
        component: GroupSafariBreathtakingWondersOfKenyaComponent
    },
    {
        path: 'group-safari-bush-and-lake',
        component: GroupSafariBushAndLakeComponent
    },
    {
        path: 'group-safari-eight-days-turkana-special',
        component: GroupSafariEightDaysTurkanaSpecialComponent
    },
    {
        path: 'group-safari-five-days-maasai-mara-lake-nakuru',
        component: GroupSafariFiveDaysMaasaiMaraLakeNakuruComponent
    },
    {
        path: 'group-safari-four-day-marsabit-chalbi-desert-and-samburu',
        component: GroupSafariFourDayMarsabitChalbiDesertAndSamburu
    },
    {
        path: 'group-safari-four-days-maasai-mara-nakuru',
        component: GroupSafariFourDaysMaasaiMaraNakuruComponent
    },
    {
        path: 'group-safari-great-lakes-six-days-and-five-nights',
        component: GroupSafariGreatLakesSixDaysAndFiveNightsComponent
    },
    {
        path: 'group-safari-home-of-the-big-five-nine-days-and-eight-nights',
        component: GroupSafariHomeOfTheBigNineDaysAndEightNightsComponent
    },
    {
        path: 'group-safari-home-of-the-wild-elephant-three-days-and-two-nights',
        component: GroupSafariHomeOfTheWildElephantComponent
    },
    {
        path: 'group-safari-land-giants-five-days-and-four-nights',
        component: GroupSafariLandGiantsFiveDaysAndFourNightsComponent
    },
    {
        path: 'group-safari-magnificent-excursions-five-days-and-four-nights',
        component: GroupSafariMagnificentExcursionsComponent
    },
    {
        path: 'group-safari-nine-days-maasai-mara-kisumu-amboseli',
        component: GroupSafariNineDaysMaasaiMaraKisumuAmboseliComponent
    },
    {
        path: 'group-safari-reconnect-with-nature-seven-days-and-six-nights',
        component: GroupSafariReconnectWithNatureSevenDaysAndSixNightsComponent
    },
    {
        path: 'group-safari-seven-days-maasai-mara-samburu',
        component: GroupSafariSevenDaysMaasaiMaraSamburuComponent
    },
    {
        path: 'group-safari-six-days-maasai-mara-lake-nakuru-baringo',
        component: GroupSafariSixDaysMaasaiMaraLakeNakuruBaringoComponent
    },
    {
        path: 'group-safari-the-great-mara-and-amboseli',
        component: GroupSafariTheGreatMaraAndAmboseliSixDaysAndFiveNightsComponent
    },
    {
        path: 'group-safari-the-great-mara-eleven-days-and-ten-nights',
        component: GroupSafariTheGreatMaraElevenDaysAndTenNightsComponent
    },
    {
        path: 'group-safari-the-great-mara-three-days-and-two-nights',
        component: GroupSafariTheGreatMaraThreeDaysAndTwoNightsComponent
    },
    {
        path: 'group-safari-three-days-the-hemmingway-trail',
        component: GroupSafariThreeDaysTheHemmingwayTrailComponent
    },
    {
        path: 'getaways',
        component: AllGetawaysComponent
    }
];

@NgModule({
    imports: [ RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DomesticRoutingModule{
}