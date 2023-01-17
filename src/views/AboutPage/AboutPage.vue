<template>
  <v-container id="AboutPage">
    <v-container id="logo_container">
      <v-img src="@/assets/logo/logo_long.svg" contain id="logo"></v-img>
    </v-container>
    <v-divider></v-divider>
    <v-container id="social_container">
      <v-container id="social_wrapper">
        <v-btn
          dark
          fab
          color="blue"
          :href="'https://www.linkedin.com/in/swisspice-z%C3%BCrich-187a03256/'"
          target="_blank"
          elevation="3"
          class="social_btn"
        >
          <v-icon large>mdi-linkedin</v-icon>
        </v-btn>
        <v-btn
          dark
          fab
          color="purple"
          :href="'https://www.instagram.com/swisspice'"
          target="_blank"
          elevation="3"
          class="social_btn"
        >
          <v-icon large>mdi-instagram</v-icon>
        </v-btn>
        <v-btn
          dark
          fab
          color="black"
          elevation="3"
          href="mailto:info@swisspice.ch"
          class="social_btn"
        >
          <v-icon large>mdi-email-outline</v-icon>
        </v-btn>
      </v-container>
    </v-container>
    <v-container id="agb_container">
      <div class="text-center">
        <v-dialog v-model="dialog" width="80vw">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark v-bind="attrs" v-on="on">
              view AGB
            </v-btn>
          </template>

          <v-card>
            <v-card-title class="text-h5 grey lighten-2">
              Allgemeine Geschäftsbedingungen
            </v-card-title>

            <v-card-text>
              Allgemeine Geschäftsbedingungen der Firma SwisSpice<br />

              <br />
              <p style="font-weight: bold; padding-bottom: 10px">
                §1 Geltung gegenüber Unternehmern und Begriffsdefinitionen
              </p>
              (1) Die nachfolgenden Allgemeinen Geschäftbedingungen gelten für
              alle Lieferungen zwischen uns und einem Verbraucher in ihrer zum
              Zeitpunkt der Bestellung gültigen Fassung.<br />
              <br />
              Verbraucher ist jede natürliche Person, die ein Rechtsgeschäft zu
              Zwecken abschließt, die überwiegend weder ihrer gewerblichen noch
              ihrer selbständigen beruflichen Tätigkeit zugerechnet werden
              können (§ 13 BGB).
              <br />

              <br />
              <p style="font-weight: bold; padding-bottom: 10px">
                §2 Zustandekommen eines Vertrages, Speicherung des
                Vertragstextes
              </p>
              (1) Die folgenden Regelungen über den Vertragsabschluss gelten für
              Bestellungen über unseren Internetshop http://www.swisspice.ch
              .<br />
              <br />
              <b
                >(2) Im Falle des Vertragsschlusses kommt der Vertrag mit<br />

                <div style="font-weight: bold; margin-left: 20px">
                  <br />
                  SwisSpice<br />
                  Jorin Bailer<br />
                  Im Weidstöckli 2<br />
                  D-8113 Boppelsen<br />
                  Registernummer <br />
                  Registergericht <br />
                  <br />
                </div>
                zustande.<br
              /></b>
              <br />
              (3) Die Präsentation der Waren in unserem Internetshop stellen
              kein rechtlich bindendes Vertragsangebot unsererseits dar, sondern
              sind nur eine unverbindliche Aufforderungen an den Verbraucher,
              Waren zu bestellen. Mit der Bestellung der gewünschten Ware gibt
              der Verbraucher ein für ihn verbindliches Angebot auf Abschluss
              eines Kaufvertrages ab.<br />
              (4) Bei Eingang einer Bestellung in unserem Internetshop gelten
              folgende Regelungen: Der Verbraucher gibt ein bindendes
              Vertragsangebot ab, indem er die in unserem Internetshop
              vorgesehene Bestellprozedur erfolgreich durchläuft.<br />
              <br />
              Die Bestellung erfolgt in folgenden Schritten:<br />
              <br />
              <div class="ml20">
                1) Auswahl der gewünschten Ware<br />

                2) Bestätigen durch Anklicken der Buttons „Bestellen“ <br />

                3) Prüfung der Angaben im Warenkorb<br />

                4) Betätigung des Buttons „zur Kasse“ <br />

                5) Anmeldung im Internetshop nach Registrierung und Eingabe der
                Anmelderangaben (E-Mail-Adresse und Passwort). <br />

                6) Nochmalige Prüfung bzw. Berichtigung der jeweiligen
                eingegebenen Daten.<br />

                7) Verbindliche Absendung der Bestellung durch Anklicken des
                Buttons „kostenpflichtig bestellen“ bzw. „kaufen“<br />

                <br />
              </div>
              Der Verbraucher kann vor dem verbindlichen Absenden der Bestellung
              durch Betätigen der in dem von ihm verwendeten Internet-Browser
              enthaltenen „Zurück“-Taste nach Kontrolle seiner Angaben wieder zu
              der Internetseite gelangen, auf der die Angaben des Kunden erfasst
              werden und Eingabefehler berichtigen bzw. durch Schließen des
              Internetbrowsers den Bestellvorgang abbrechen. Wir bestätigen den
              Eingang der Bestellung unmittelbar durch eine automatisch
              generierte E-Mail („Auftragsbestätigung“). Mit dieser nehmen wir
              Ihr Angebot an.
              <br />
              <br />
              (5) Speicherung des Vertragstextes bei Bestellungen über unseren
              Internetshop : Wir senden Ihnen die Bestelldaten und unsere AGB
              per E-Mail zu. Die AGB können Sie jederzeit auch unter
              http://swisspice.ch/#/#about einsehen. Ihre Bestelldaten sind aus
              Sicherheitsgründen nicht mehr über das Internet zugänglich.
              <br />

              <br />
              <p style="font-weight: bold; padding-bottom: 10px">
                §3 Preise, Versandkosten, Zahlung, Fälligkeit
              </p>
              (1) Die angegebenen Preise enthalten die gesetzliche Umsatzsteuer
              und sonstige Preisbestandteile. Hinzu kommen etwaige
              Versandkosten.<br />
              <br />
              (2) Der Verbraucher hat die Möglichkeit der Zahlung per Vorkasse
              .<br />
              <br />
              (3) Hat der Verbraucher die Zahlung per Vorkasse gewählt, so
              verpflichtet er sich, den Kaufpreis unverzüglich nach
              Vertragsschluss zu zahlen.<br />

              <br />
              <p style="font-weight: bold; padding-bottom: 10px">
                §4 Lieferung
              </p>
              (1) Sofern wir dies in der Produktbeschreibung nicht deutlich
              anders angegeben haben, sind alle von uns angebotenen Artikel
              sofort versandfertig. Die Lieferung erfolgt hier spätesten
              innerhalb von 10 Werktagen. Dabei beginnt die Frist für die
              Lieferung im Falle der Zahlung per Vorkasse am Tag nach
              Zahlungsauftrag an die mit der Überweisung beauftragte Bank und
              bei allen anderen Zahlungsarten am Tag nach Vertragsschluss zu
              laufen. Fällt das Fristende auf einen Samstag, Sonntag oder
              gesetzlichen Feiertag am Lieferort, so endet die Frist am nächsten
              Werktag.
              <br /><br />

              (2) Die Gefahr des zufälligen Untergangs und der zufälligen
              Verschlechterung der verkauften Sache geht auch beim
              Versendungskauf erst mit der Übergabe der Sache an den Käufer auf
              diesen über. <br />

              <br />
              <p style="font-weight: bold; padding-bottom: 10px">
                §5 Eigentumsvorbehalt
              </p>
              Wir behalten uns das Eigentum an der Ware bis zur vollständigen
              Bezahlung des Kaufpreises vor. <br />

              <br />

              ****************************************************************************************************
              <br />
              <p style="font-weight: bold; padding-bottom: 10px">
                §6 Widerrufsrecht des Kunden als Verbraucher:
              </p>

              <b> Widerrufsrecht für Verbraucher</b><br />
              <br />
              Verbrauchern steht ein Widerrufsrecht nach folgender Maßgabe zu,
              wobei Verbraucher jede natürliche Person ist, die ein
              Rechtsgeschäft zu Zwecken abschließt, die überwiegend weder ihrer
              gewerblichen noch ihrer selbständigen beruflichen Tätigkeit
              zugerechnet werden können:

              <br />
              <br />

              <p
                style="
                  font-weight: bold;
                  padding-bottom: 1px;
                  text-align: center;
                "
              >
                Widerrufsbelehrung
              </p>
              <br />
              <b>Widerrufsrecht</b><br />
              <br />
              Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen
              diesen Vertrag zu widerrufen.
              <br />
              <br />
              Die Widerrufsfrist beträgt vierzehn Tage, ab dem Tag, an dem Sie
              oder ein von Ihnen benannter Dritter, der nicht der Beförderer
              ist, die Waren in Besitz genommen haben bzw. hat.

              <br /><br />
              Um Ihr Widerrufsrecht auszuüben, müssen Sie uns<br />
              <div
                style="margin-left: 20px; margin-top: 5px; margin-bottom: 5px"
              >
                SwisSpice<br />
                Jorin Bailer<br />
                Im Weidstöckli 2<br />
                D-8113 Boppelsen<br />
                E-Mail info@swisspice.ch<br />
              </div>
              mittels einer eindeutigen Erklärung (z.B. ein mit der Post
              versandter Brief, Telefax oder E-Mail) über Ihren Entschluss,
              diesen Vertrag zu widerrufen, informieren. Sie können dafür das
              beigefügte Muster-Widerrufsformular verwenden, das jedoch nicht
              vorgeschrieben ist.
              <br />
              <br />

              <b>Widerrufsfolgen</b>
              <br /><br />
              Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle
              Zahlungen, die wir von Ihnen erhalten haben, einschließlich der
              Lieferkosten (mit Ausnahme der zusätzlichen Kosten, die sich
              daraus ergeben, dass Sie eine andere Art der Lieferung als die von
              uns angebotene, günstigste Standardlieferung gewählt haben),
              unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag
              zurückzuzahlen, an dem die Mitteilung über Ihren Widerruf dieses
              Vertrags bei uns eingegangen ist. Für diese Rückzahlung verwenden
              wir dasselbe Zahlungsmittel, das Sie bei der ursprünglichen
              Transaktion eingesetzt haben, es sei denn, mit Ihnen wurde
              ausdrücklich etwas anderes vereinbart; in keinem Fall werden Ihnen
              wegen dieser Rückzahlung Entgelte berechnet.
              <br />
              <br />

              Wir können die Rückzahlung verweigern, bis wir die Waren wieder
              zurückerhalten haben oder bis Sie den Nachweis erbracht haben,
              dass Sie die Waren zurückgesandt haben, je nachdem, welches der
              frühere Zeitpunkt ist.
              <br />
              <br />

              Sie haben die Waren unverzüglich und in jedem Fall spätestens
              binnen vierzehn Tagen ab dem Tag, an dem Sie uns über den Widerruf
              dieses Vertrages unterrichten, an uns zurückzusenden oder zu
              übergeben. Die Frist ist gewahrt, wenn Sie die Waren vor Ablauf
              der Frist von vierzehn Tagen absenden.
              <br />
              <br />

              Sie tragen die unmittelbaren Kosten der Rücksendung der Waren.<br />
              <br />

              <b>Ende der Widerrufsbelehrung</b>
              <br />
              <br />
              ****************************************************************************************************

              <br />

              <p style="font-weight: bold; padding-bottom: 10px">
                §7 Widerrufsformular
              </p>

              <p style="text-align: center; font-weight: bold">
                Muster-Widerrufsformular
              </p>
              (Wenn Sie den Vertrag widerrufen wollen, dann füllen Sie bitte
              dieses Formular aus und senden Sie es zurück.)<br />
              <div style="border: 1px solid #000000; padding: 10px">
                An :<br />
                SwisSpice<br />
                Jorin Bailer<br />
                Im Weidstöckli 2<br />
                D-8113 Boppelsen<br />
                E-Mail info@swisspice.ch<br />
                <br />

                Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*)
                abgeschlossenen Vertrag über den Kauf der folgenden Waren
                (*)/die Erbringung der folgenden Dienstleistung (*)<br />
                <br />
                _____________________________________________________<br />
                <br />
                Bestellt am (*)/erhalten am (*)<br />
                <br />
                __________________<br />
                <br />
                Name des/der Verbraucher(s)<br />
                <br />
                _____________________________________________________<br />
                <br />
                Anschrift des/der Verbraucher(s)<br />
                <br />
                <br />
                _____________________________________________________<br />
                <br />
                Unterschrift des/der Verbraucher(s) (nur bei Mitteilung auf
                Papier)<br />
                <br />
                __________________<br />
                <br />
                Datum<br />
                <br />
                __________________<br />
                <br />
              </div>
              (*) Unzutreffendes streichen.<br />

              <br />
              <p style="font-weight: bold; padding-bottom: 10px">
                §8 Gewährleistung
              </p>

              Es gelten die gesetzlichen Gewährleistungsregelungen.
              <br />

              <br />
              <p style="font-weight: bold; padding-bottom: 10px">
                §9 Vertragssprache
              </p>
              Als Vertragssprache steht ausschließlich Deutsch zur Verfügung.<br />

              <br />
              <br />
              <p>Stand der AGB Nov.2022</p>

              <p>
                <i
                  ><a href="http://www.agb.de">Gratis AGB</a> erstellt von
                  agb.de</i
                >
              </p>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" text @click="dialog = false"> OK </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
    </v-container>
    <v-container id="about_cards_wrapper">
      <v-container id="about_cards_container">
        <v-card
          elevation="3"
          id="about_company"
          min-width="40%"
          max-width="40%"
          min-height="fit-content"
          class="about_cards"
        >
          <v-card-title
            class="text-h4 font-weight-bold text-uppercase"
            style="display: flex; align-items: center; justify-content: center"
          >
            Unternehmen
          </v-card-title>
          <v-card-text>
            SwisSpice ist ein junges und frisches Startup, das im Rahmen einer
            Abschlussarbeit in der Berufsschule TBZ im Fach Wirtschaft und Recht
            gegründet wurde. SwisSpice spezialisiert sich auf die Herstellung
            von Nachhaltigen Gewürzmischungen, da grosse Veränderungen schon bei
            kleinen Gesten anfängt.
          </v-card-text>
        </v-card>
        <v-card
          elevation="3"
          id="about_products"
          min-width="40%"
          max-width="40%"
          min-height="fit-content"
          class="about_cards"
        >
          <v-card-title
            class="text-h4 font-weight-bold text-uppercase"
            style="display: flex; align-items: center; justify-content: center"
          >
            Produkte
          </v-card-title>
          <v-card-text>
            Unsere Nachhaltigkeit erreichen wir, <br />
            indem wir, wenn möglich, nur Lokale und Bio Produkte verwenden.<br />
            Zudem Pflanzen wir bei jeden 15.- Fr, die sie bei uns einkaufen,<br />
            einen Baum. Um das Ausgestossene CO^2 die durch <br />
            den Versand und Produktion zustande kam zu kompensieren. <br />
          </v-card-text>
        </v-card>
      </v-container>
    </v-container>

    <v-container id="emp_profiles">
      <EmployeeProfile
        image="default_avatar.png"
        emp_name="Loris Kampus"
        emp_position="CIO"
      />
      <EmployeeProfile
        image="default_avatar.png"
        emp_name="Jakup Bajra"
        emp_position="CMO"
      />
      <EmployeeProfile
        image="default_avatar.png"
        emp_name="Meo Hotz"
        emp_position="CPO"
      />
      <EmployeeProfile
        image="default_avatar.png"
        emp_name="Jorin Bailer"
        emp_position="CEO/CFO"
      />
      <EmployeeProfile
        image="default_avatar.png"
        emp_name="Luca Blatter"
        emp_position="CAO"
      />
    </v-container>
  </v-container>
</template>

<script lang="ts" src="./AboutPage.ts" />
<style src="./AboutPage.css" />
