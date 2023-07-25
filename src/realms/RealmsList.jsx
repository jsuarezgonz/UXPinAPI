import {
  DxcFlex,
  DxcBox,
  DxcInset,
  DxcHeading,
  DxcParagraph,
  DxcGrid,
  DxcTypography,
  DxcLink,
} from "@dxc-technology/halstack-react";

const RealmsList = () => {
  return (
    <>
      <DxcGrid>
        <DxcTypography>
          {/* <DxcSpinner label="Loading" mode="overlay" /> */}
          <DxcInset space="5rem">
            <DxcHeading text="Realms" />
            <DxcParagraph>
              Manage the Realms available in your instance of DXC Assure
              Platform.
            </DxcParagraph>
            <DxcInset space="0rem" top="3rem">
              <DxcBox size="large">
                <DxcFlex direction="column" grow={1} gap="4rem">
                  <DxcInset
                    space="0rem"
                    horizontal="2rem"
                    bottom="1rem"
                    vertical="1rem"
                  >
                    <DxcHeading text="Platform Default" level={3} />
                    <DxcInset space="0rem" top="3rem">
                      <DxcFlex justifyContent="flex-end">
                        <DxcLink
                          href="/realm"
                          icon="https://img.icons8.com/ios-filled/100/arrow.png"
                          inheritColor={true}
                        />
                        {/* <DxcChip suffixIcon="https://img.icons8.com/ios-glyphs/30/arrow.png" /> */}
                      </DxcFlex>
                    </DxcInset>
                  </DxcInset>
                </DxcFlex>
              </DxcBox>
            </DxcInset>
          </DxcInset>
        </DxcTypography>
      </DxcGrid>
    </>
  );
};

export default RealmsList;
