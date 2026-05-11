export const ETAPP_TULEMUSED_QUERY = `
  *[_type == "etappTulemused"] | order(etappNr desc) {
    _id,
    etappNr,
    etappNimi,
    kuupaev,
    asukoht,
    u11[] { koht, nimi, parimRing, punktid },
    u14[] { koht, nimi, parimRing, punktid },
  }
`;
