@echo off&setlocal EnableDelayedExpansion&color 3e
title Windows KMS激活脚本 --by thun888
echo 注意：有时可能连接不上（这里会卡1~10秒,连接不上另有提醒）

:: 如果激活失败，可能是因为连不到KMS服务器了，
:: 你仅需修改下面的KMS服务器地址
set KMS_Sev=kms.thun888.xyz
set KMS_Port=1688
set do_check=false

call :getver
call :adminchk
::定义win10
set 10.0_1_Core_=TX9XD-98N7V-6WMQ6-BX7FG-H8Q99
set 10.0_1_CoreCountrySpecific=PVMJN-6DFY6-9CCP6-7BKTT-D3WVR
set 10.0_1_CoreN=3KHY7-WNT83-DGQKR-F7HPR-844BM
set 10.0_1_CoreSingleLanguage=7HNRX-D7KGG-3K4RQ-4WPJ4-YTDFH
set 10.0_1_Professional=W269N-WFGWX-YVC9B-4J6C9-T83GX
set 10.0_1_ProfessionalN=MH37W-N47XK-V7XM9-C7227-GCQG9
set 10.0_1_Enterprise=NPPR9-FWDCX-D2C8J-H872K-2YT43
set 10.0_1_EnterpriseN=DPH2V-TTNVB-4X9Q3-TJR4H-KHJW4
set 10.0_1_Education=NW6C2-QMPVW-D7KKK-3GKT6-VCFB2
set 10.0_1_EducationN=2WH4N-8QGBV-H22JP-CT43Q-MDWWJ
set 10.0_1_EnterpriseS=WNMTR-4C88C-JK8YV-HQ7T2-76DF9
set 10.0_1_EnterpriseSN=2F77B-TNFGY-69QQF-B8YKP-D69TJ
set 10.0_1_EnterpriseLTSC=M7XTQ-FN8P6-TTKYV-9D4CC-J462D
set 10.0_1_EnterpriseLTSCN=92NFX-8DJQP-P6BBQ-THF9C-7CG2H
set 10.0_1_EnterpriseLTSB=DCPHK-NFMTC-H88MJ-PFHPY-QJ4BJ
set 10.0_1_EnterpriseLTSBN=QFFDN-GRT3P-VKWWX-X7T3R-8B639
set 10.0_1_ProfessionalEducation=6TP4R-GNPTD-KYYHQ-7B7DP-J447Y
set 10.0_1_ProfessionalEducationN=YVWGF-BXNMC-HTQYQ-CPQ99-66QFC
set 10.0_1_ProfessionalWorkstation=NRG8B-VKK3Q-CXVCJ-9G2XF-6Q84J
set 10.0_1_ProfessionalWorkstationN=9FNHH-K3HBT-3W4TD-6383H-6XYWF
set 10.0_1_EnterpriseG=YYVX9-NTFWV-6MDM3-9PT4T-4M68B
set 10.0_1_EnterpriseGN=44RPN-FTY23-9VTTB-MP9BX-T84FV
set 10.0_1_Home=TX9XD-98N7V-6WMQ6-BX7FG-H8Q99
set 10.0_1_HomeN=3KHY7-WNT83-DGQKR-F7HPR-844BM
set 10.0_1_HomeSingleLanguage=7HNRX-D7KGG-3K4RQ-4WPJ4-YTDFH
set 10.0_1_HomeCountrySpecific=PVMJN-6DFY6-9CCP6-7BKTT-D3WVR
set 10.0_1_HomeCore=TX9XD-98N7V-6WMQ6-BX7FG-H8Q99
set 10.0_1_HomeCoreCountrySpecific=PVMJN-6DFY6-9CCP6-7BKTT-D3WVR
::定义2019
set 10.0_3_2019_ServerDatacenter=WMDGN-G9PQG-XVVXX-R3X43-63DFG
set 10.0_3_2019_ServerStandard=N69G4-B89J2-4G8F4-WWYCC-J464C
set 10.0_3_2019_ServerEssentials=WVDHN-86M7X-466P6-VHXV7-YY726
set 10.0_3_2019_ServerAzureCore=FDNH6-VW9RW-BXPJ7-4XTYG-239TB
set 10.0_3_2019_ServerARM64=GRFBW-QNDC4-6QBHG-CCK3B-2PR88

::定义2016
set 10.0_3_2016_ServerDatacenter=CB7KF-BWN84-R7R2Y-793K2-8XDDG
set 10.0_3_2016_ServerStandard=WC2BQ-8NRM3-FDDYY-2BFGV-KHKQY
set 10.0_3_2016_ServerEssentials=JCKRF-N37P4-C2D82-9YXRT-4M63B
set 10.0_3_2016_ServerCloudStorage=QN4C6-GBJD2-FB422-GHWJK-GJG2R
set 10.0_3_2016_ServerAzureCore=VP34G-4NPPG-79JTQ-864T4-R3MQX
set 10.0_3_2016_ServerRDSH=7NBT4-WGBQX-MP4H7-QXFF8-YP3KX


::定义Windows Server 2012 R2 and Windows 8.1
set 6.3_3_ServerStandard=D2N9P-3P6X9-2R39C-7RTCD-MDVJX
set 6.3_3_ServerDatacenter=W3GGN-FT8W3-Y4M27-J84CP-Q3VJ9
set 6.3_3_ServerEssentials=KNC87-3J2TX-XB4WP-VCPJV-M4FWM
set 6.3_3_ServerCloudStorage=3NPTF-33KPT-GGBPR-YX76B-39KDD

set 6.3_1_Professional=GCRJD-8NW9H-F2CDX-CCM8D-9D6T9
set 6.3_1_ProfessionalN=HMCNV-VVBFX-7HMBH-CTY9B-B4FXY
set 6.3_1_Enterprise=MHF9N-XY6XB-WVXMC-BTDCT-MKKG7
set 6.3_1_EnterpriseN=TT4HM-HN7YT-62K67-RGRQJ-JFFXW
set 6.3_1_ProfessionalWMC=789NJ-TQK6T-6XTH8-J39CJ-J8D3P
set 6.3_1_Core=M9Q9P-WNJJT-6PXPY-DWX8H-6XWKK
set 6.3_1_CoreN=7B9N3-D94CG-YTVHR-QBPX3-RJP64
set 6.3_1_CoreARM=XYTND-K6QKT-K2MRH-66RTM-43JKP
set 6.3_1_CoreSingleLanguage=BB6NG-PQ82V-VRDPW-8XVD2-V8P66
set 6.3_1_CoreCountrySpecific=NCTT7-2RGK8-WMHRF-RY7YQ-JTXG3
set 6.3_1_EmbeddedIndustry=NMMPB-38DD4-R2823-62W8D-VXKJB
set 6.3_1_EmbeddedIndustryEnterprise=FNFKF-PWTVT-9RC8H-32HB2-JB34X
set 6.3_1_EmbeddedIndustryAutomotive=VHXM3-NR6FT-RY6RT-CK882-KW2CJ
set 6.3_1_CoreConnected=3PY8R-QHNP9-W7XQD-G6DPH-3J2C9
set 6.3_1_CoreConnectedN =Q6HTR-N24GM-PMJFP-69CD8-2GXKR
set 6.3_1_CoreConnectedSingleLanguage=KF37N-VDV38-GRRTV-XH8X6-6F3BB
set 6.3_1_CoreConnectedCountrySpecific=R962J-37N87-9VVK2-WJ74P-XTMHR
set 6.3_1_ProfessionalStudent=MX3RK-9HNGX-K3QKC-6PJ3F-W8D7B
set 6.3_1_ProfessionalStudentN=TNFGH-2R6PB-8XM3K-QYHX2-J4296



::定义Windows Server 2012 and Windows 8
set 6.2_1_Professional=NG4HW-VH26C-733KW-K6F98-J8CK4
set 6.2_1_ProfessionalN=XCVCF-2NXM9-723PB-MHCB7-2RYQQ
set 6.2_1_Enterprise=32JNW-9KQ84-P47T8-D8GGY-CWCK7
set 6.2_1_EnterpriseN=JMNMF-RHW7P-DMY6X-RF3DR-X2BQT

set 6.2_3_Server=BN3D2-R7TKB-3YPBD-8DRP2-27GG4
set 6.2_3_ServerN=8N2M2-HWPGY-7PGT9-HGDD8-GVGGY
set 6.2_3_ServerSingleLanguage=2WN2H-YGCQR-KFX6K-CD6TF-84YXQ
set 6.2_3_ServerCountry Specific=4K36P-JN4VD-GDC6V-KDT89-DYFKP
set 6.2_3_ServerStandard=XC9B7-NBPP2-83J2H-RHMBY-92BT4
set 6.2_3_ServerMultiPointStandard=HM7DN-YVMH3-46JC3-XYTG7-CYQJJ
set 6.2_3_ServerMultiPointPremium=XNH6W-2V9GX-RGJ4K-Y8X6F-QGJ2G
set 6.2_3_ServerDatacenter=48HP8-DN98B-MYWDG-T2DCC-8W83P



::定义Windows Server 2008R2
set 6.1_3_ServerWeb=6TPJF-RBVHG-WBW2R-86QPH-6RTM4
set 6.1_3_ServerHPC=TT8MH-CG224-D3D7Q-498W2-9QCTX
set 6.1_3_ServerStandard=YC6KT-GKW9T-YTKYR-T4X34-R7VHC
set 6.1_3_ServerEnterprise=489J6-VHDMP-X63PK-3K798-CPX3Y
set 6.1_3_ServerDatacenter=74YFP-3QFB3-KQT8W-PMXWJ-7M648
set 6.1_3_ServerEnterpriseIA64=GT63C-RJFQ3-4GMB6-BRFB9-CB83V

::定义Windows 7
set 6.1_1_Professional=FJ82H-XT6CR-J8D7P-XQJJ2-GPDD4
set 6.1_1_ProfessionalN=MRPKT-YTG23-K7D7T-X2JMM-QY7MG
set 6.1_1_ProfessionalE=W82YF-2Q76Y-63HXB-FGJG9-GF7QX
set 6.1_1_Enterprise=33PXH-7Y6KF-2VJC9-XBBR8-HVTHH
set 6.1_1_EnterpriseN=YDRBP-3D83W-TY26F-D46B2-XCKRJ
set 6.1_1_EnterpriseE=C29WB-22CC8-VJ326-GHFJW-H9DH4

::Windows Vista and Windows Server 2008
set 6.0_1_Business=YFKBB-PQJJV-G996G-VWGXY-2V3X8
set 6.0_1_BusinessN=HMBQG-8H2RH-C77VX-27R82-VMQBT
set 6.0_1_Enterprise=VKK3X-68KWM-X2YGT-QR4M6-4BWMV
set 6.0_1_EnterpriseN=VTC42-BM838-43QHV-84HX6-XJXKV

set 6.0_3_ServerWeb=WYR28-R7TFJ-3X2YQ-YCY4H-M249D
set 6.0_3_ServerStandard=TM24T-X9RMF-VWXK6-X8JC9-BFGM2
set 6.0_3_ServerEnterprise=YQGMW-MPWTJ-34KDK-48M3W-X4Q6V
set 6.0_3_ServerHPC=RCTX3-KWVHP-BR6TB-RB6DM-6X7HP
set 6.0_3_ServerDatacenter=7M67G-PC374-GR742-YH8V4-TCBY3
set 6.0_3_ServerIA64=4DWFP-JF3DJ-B7DTH-78FJB-PDRHK

for /f "tokens=3 delims=: " %%G in ('dism /Online /Get-CurrentEdition /English ^| findstr /i "Current Edition :"') do (
            set "EditionID=%%G"
        )

for /f "tokens=2 delims== " %%I in ('wmic os get ProductType /value') do (
            set "ProductType=%%I"
        )


if "%winver%"=="10.0" if "%ProductType%"=="3" set do_check=true
if "%do_check%"=="true" (
    for /f "tokens=4 delims= " %%J in ('wmic os get Caption /value') do ( set "Caption=%%J" )
)


if defined Caption (
    set strEditionId=%winver%_%ProductType%_%Caption%_%EditionID%
) else (
    set strEditionId=%winver%_%ProductType%_%EditionID%
)

if defined %strEditionId% (
    cscript //Nologo %windir%\system32\slmgr.vbs /ipk !%strEditionId%!
    cscript //Nologo %windir%\system32\slmgr.vbs /skms %KMS_Sev%
    cscript //Nologo %windir%\system32\slmgr.vbs /ato
) else (
    echo.&echo Not found DEFINED Key: "%EditionID%".
    echo.
)
pause
exit



:getver
ver | find "10.0." >nul && set "winver=10.0"
ver | find "6.3." >nul && set "winver=6.3"
ver | find "6.2." >nul && set "winver=6.2"
ver | find "6.1." >nul && set "winver=6.1"
ver | find "6.0." >nul && set "winver=6.0"



:adminchk
reg query "HKU\S-1-5-19" >nul 2>nul || (
cls&echo.&echo Run as ADMINISTRATOR, Pls.
echo.&echo Press any key to exit.
echo.&pause>nul
exit)
goto :EOF