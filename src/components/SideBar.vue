<template>
    <div :class="$style.frameParent">
      <section :class="$style.frameWrapper">
        <div :class="$style.frameGroup">
          <div :class="$style.emailSignatureLogoOnlyParent">
            <img
              :class="$style.emailSignatureLogoOnly"
              loading="lazy"
              alt=""
              src="@/assets/logo.png"
            />
            <div :class="$style.emailSignatureLogoOnlyWrapper">
              <img
                :class="$style.emailSignatureLogoOnly1"
                loading="lazy"
                alt=""
                src="@/assets/email-signature.svg"
              />
            </div>
            <div :class="$style.frameContainer">
              <div :class="$style.arrowButtonLeft1StreamlinWrapper">
                <img
                  :class="$style.arrowButtonLeft1StreamlinIcon"
                  loading="lazy"
                  alt=""
                  src="@/assets/icons/arrow-btn-left.svg"
                />>
              </div>
            </div>
          </div>
          <div :class="$style.dashboardParent">
            <div :class="$style.dashboard">
              <img
                :class="$style.taskChecklistStreamlineUltIcon"
                loading="lazy"
                alt=""
                src="@/assets/icons/task-checklist-active.svg"
              />
              <div :class="$style.dashboard1">Plan</div>
              <div :class="$style.arrowDown1StreamlineUltimWrapper">
                <img
                  :class="$style.arrowDown1StreamlineUltimIcon"
                  loading="lazy"
                  alt=""
                  src="@/assets/icons/arrow-up.svg"
                />
              </div>
            </div>
            <div :class="$style.frameDiv">
              <div :class="$style.frameParent1">
                <div :class="$style.frameWrapper1">
                  <div :class="$style.rectangleParent">
                    <div :class="$style.frameChild" />
                    <div :class="$style.frameItem" />
                  </div>
                </div>
                <div :class="$style.frameParent2">
                  <div :class="$style.dashboardWrapper">
                    <div :class="$style.dashboard2">Plans</div>
                  </div>
                  <div :class="$style.dashboardContainer">
                    <div :class="$style.dashboard3">Scoring</div>
                  </div>
                  <div :class="$style.dashboardFrame">
                    <div :class="$style.dashboard4">Capacity</div>
                  </div>
                  <div :class="$style.dashboardWrapper1">
                    <div :class="$style.dashboard5">Territories</div>
                  </div>
                </div>
              </div>
            </div>
            <div :class="$style.dashboard6">
              <img
                :class="$style.multipleNeutral2StreamlineIcon"
                loading="lazy"
                alt=""
                src="@/assets/icons/multiple-neutral.svg"
              />
              <div :class="$style.dashboard7">Accounts</div>
            </div>
            <div :class="$style.dashboard8">
              <img
                :class="$style.database2StreamlineUltimatIcon"
                alt=""
                src="@/assets/icons/database-2.svg"
              />
              <div :class="$style.dashboard9">Data</div>
              <div :class="$style.arrowDown1StreamlineUltimContainer">
                <img
                  :class="$style.arrowDown1StreamlineUltimIcon1"
                  alt=""
                  src="@/assets/icons/arrow-down.svg"
                />
              </div>
            </div>
            <div :class="$style.frameInner" />
            <div :class="$style.dashboard10">
              <img
                :class="$style.cogStreamlineUltimateIcon"
                loading="lazy"
                alt=""
                src="@/assets/icons/setting.svg"
              />
              <div :class="$style.dashboard11">Settings</div>
            </div>
            <div :class="$style.dashboard12">
              <img
                :class="$style.questionHelpCircleStreamliIcon"
                loading="lazy"
                alt=""
                src="@/assets/icons/question-help.svg"
              />
              <div :class="$style.dashboard13">Need Help?</div>
            </div>
          </div>
          <div :class="$style.dashboardGroup">
            <div :class="$style.dashboard14">
              <img
                :class="$style.singleManCircleStreamlineIcon"
                loading="lazy"
                alt=""
                src="@/assets/icons/single-man-circle.svg"
              />
              <div :class="$style.dashboard15">Workspace Name</div>
              <img
                :class="$style.moveExpandVerticalStreamliIcon"
                loading="lazy"
                alt=""
                src="@/assets/icons/move-expand-vertical.svg"
              />
            </div>
            <div :class="$style.rectangleDiv" />
            <div :class="$style.dashboard16">
              <img
                :class="$style.login3StreamlineUltimateIcon"
                loading="lazy"
                alt=""
                src="@/assets/icons/logout.svg"
              />
              <div :class="$style.dashboard17">Log Out</div>
            </div>
          </div>
        </div>
      </section>
      <div :class="$style.frameChild1" />
    </div>
  </template>
  <script setup>
    import IconTaskChecklist from '../components/icons/IconTaskChecklist.vue'
  </script>
  <style module>
    .emailSignatureLogoOnly {
      height: 40px;
      width: 40px;
      position: relative;
      object-fit: cover;
    }
    .emailSignatureLogoOnly1 {
      align-self: stretch;
      height: 28px;
      position: relative;
      max-width: 100%;
      overflow: hidden;
      flex-shrink: 0;
      object-fit: cover;
    }
    .emailSignatureLogoOnlyWrapper {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      padding: var(--padding-7xs) 16px 0px 0px;
    }
    .arrowButtonLeft1StreamlinIcon {
      height: 12px;
      width: 12px;
      position: relative;
      overflow: hidden;
      flex-shrink: 0;
    }
    .arrowButtonLeft1StreamlinWrapper {
      width: 32px;
      border-radius: 6px;
      border: 1px solid var(--system-light-grey);
      box-sizing: border-box;
      overflow: hidden;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      padding: var(--padding-5xs) 9px;
    }
    .frameContainer {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      padding: 4px 0px 0px;
    }
    .emailSignatureLogoOnlyParent {
      align-self: stretch;
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: flex-start;
      gap: 8px;
    }
    .taskChecklistStreamlineUltIcon {
      height: 24px;
      width: 24px;
      position: relative;
      overflow: hidden;
      flex-shrink: 0;
      min-height: 24px;
    }
    .dashboard1 {
      flex: 1;
      position: relative;
      line-height: 24px;
    }
    .arrowDown1StreamlineUltimIcon {
      width: 12px;
      height: 12px;
      position: relative;
      overflow: hidden;
      flex-shrink: 0;
      object-fit: contain;
    }
    .arrowDown1StreamlineUltimWrapper {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      padding: var(--padding-7xs) 0px 0px;
    }
    .dashboard {
      align-self: stretch;
      border-radius: var(--br-5xs);
      background-color: var(--system-bg);
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: flex-start;
      padding: var(--padding-5xs) var(--padding-xs);
      gap: var(--gap-xs);
      color: var(--contrast-bitter-sweet);
    }
    .frameChild {
      position: absolute;
      top: 0px;
      left: 0px;
      border-radius: var(--br-12xs);
      background-color: var(--system-light-grey);
      width: 100%;
      height: 100%;
      display: none;
    }
    .frameItem {
      position: absolute;
      top: 0px;
      left: 0px;
      border-radius: var(--br-12xs);
      background-color: var(--contrast-bitter-sweet);
      width: 2px;
      height: 40px;
      z-index: 1;
    }
    .rectangleParent {
      height: 172px;
      width: 2px;
      position: relative;
      border-radius: var(--br-12xs);
      background-color: var(--system-light-grey);
    }
    .frameWrapper1 {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: flex-start;
      padding: 0px 11px;
    }
    .dashboard2 {
      flex: 1;
      position: relative;
      line-height: 24px;
    }
    .dashboardWrapper {
      align-self: stretch;
      border-radius: var(--br-9xs);
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: flex-start;
      padding: var(--padding-5xs);
      color: var(--contrast-bitter-sweet);
      font-family: var(--desktop-body-medium-semibold);
    }
    .dashboard3 {
      flex: 1;
      position: relative;
      line-height: 24px;
    }
    .dashboardContainer {
      align-self: stretch;
      border-radius: var(--br-9xs);
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: flex-start;
      padding: var(--padding-5xs);
    }
    .dashboard4 {
      flex: 1;
      position: relative;
      line-height: 24px;
    }
    .dashboardFrame {
      align-self: stretch;
      border-radius: var(--br-9xs);
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: flex-start;
      padding: var(--padding-5xs);
    }
    .dashboard5 {
      flex: 1;
      position: relative;
      line-height: 24px;
    }
    .dashboardWrapper1 {
      align-self: stretch;
      border-radius: var(--br-9xs);
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: flex-start;
      padding: var(--padding-5xs);
    }
    .frameParent2 {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      gap: var(--gap-9xs);
    }
    .frameParent1 {
      flex: 1;
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: flex-start;
      gap: var(--gap-9xs);
    }
    .frameDiv {
      align-self: stretch;
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: flex-start;
      padding: 0px var(--padding-xs);
      font-family: var(--desktop-body-medium);
    }
    .multipleNeutral2StreamlineIcon {
      height: 24px;
      width: 24px;
      position: relative;
      overflow: hidden;
      flex-shrink: 0;
      min-height: 24px;
    }
    .dashboard7 {
      flex: 1;
      position: relative;
      line-height: 24px;
    }
    .dashboard6 {
      align-self: stretch;
      border-radius: var(--br-5xs);
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: flex-start;
      padding: var(--padding-5xs) var(--padding-xs);
      gap: var(--gap-xs);
    }
    .database2StreamlineUltimatIcon {
      height: 24px;
      width: 24px;
      position: relative;
      overflow: hidden;
      flex-shrink: 0;
      min-height: 24px;
    }
    .dashboard9 {
      flex: 1;
      position: relative;
      line-height: 24px;
    }
    .arrowDown1StreamlineUltimIcon1 {
      width: 12px;
      height: 12px;
      position: relative;
      overflow: hidden;
      flex-shrink: 0;
    }
    .arrowDown1StreamlineUltimContainer {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      padding: var(--padding-7xs) 0px 0px;
    }
    .dashboard8 {
      align-self: stretch;
      border-radius: var(--br-5xs);
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: flex-start;
      padding: var(--padding-5xs) var(--padding-xs);
      gap: var(--gap-xs);
    }
    .frameInner {
      align-self: stretch;
      height: 1px;
      position: relative;
      background-color: var(--system-light-grey);
    }
    .cogStreamlineUltimateIcon {
      height: 24px;
      width: 24px;
      position: relative;
      overflow: hidden;
      flex-shrink: 0;
      min-height: 24px;
    }
    .dashboard11 {
      flex: 1;
      position: relative;
      line-height: 24px;
    }
    .dashboard10 {
      align-self: stretch;
      border-radius: var(--br-5xs);
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: flex-start;
      padding: var(--padding-5xs) var(--padding-xs);
      gap: var(--gap-xs);
    }
    .questionHelpCircleStreamliIcon {
      height: 24px;
      width: 24px;
      position: relative;
      overflow: hidden;
      flex-shrink: 0;
      min-height: 24px;
    }
    .dashboard13 {
      flex: 1;
      position: relative;
      line-height: 24px;
    }
    .dashboard12 {
      align-self: stretch;
      border-radius: var(--br-5xs);
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: flex-start;
      padding: var(--padding-5xs) var(--padding-xs);
      gap: var(--gap-xs);
    }
    .dashboardParent {
      align-self: stretch;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      padding: 0px 0px 290px;
      gap: var(--gap-xs);
    }
    .singleManCircleStreamlineIcon {
      height: 24px;
      width: 24px;
      position: relative;
      overflow: hidden;
      flex-shrink: 0;
      min-height: 24px;
    }
    .dashboard15 {
      flex: 1;
      position: relative;
      line-height: 24px;
    }
    .moveExpandVerticalStreamliIcon {
      height: 14px;
      width: 14px;
      position: absolute;
      margin: 0 !important;
      top: calc(50% - 7px);
      right: 12px;
      overflow: hidden;
      flex-shrink: 0;
    }
    .dashboard14 {
      align-self: stretch;
      border-radius: var(--br-5xs);
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: flex-start;
      padding: var(--padding-5xs) var(--padding-xs);
      position: relative;
      gap: var(--gap-xs);
    }
    .rectangleDiv {
      align-self: stretch;
      height: 1px;
      position: relative;
      background-color: var(--system-light-grey);
    }
    .login3StreamlineUltimateIcon {
      height: 24px;
      width: 24px;
      position: relative;
      overflow: hidden;
      flex-shrink: 0;
      min-height: 24px;
    }
    .dashboard17 {
      flex: 1;
      position: relative;
      line-height: 24px;
    }
    .dashboard16 {
      align-self: stretch;
      border-radius: var(--br-5xs);
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: flex-start;
      padding: var(--padding-5xs) var(--padding-xs);
      gap: var(--gap-xs);
    }
    .dashboardGroup {
      align-self: stretch;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      gap: var(--gap-xs);
    }
    .frameGroup {
      align-self: stretch;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      gap: 48px;
    }
    .frameWrapper {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      padding: var(--padding-5xl) 0px 0px;
      text-align: left;
      font-size: var(--desktop-body-medium-semibold-size);
      color: var(--system-grey);
      font-family: var(--desktop-body-medium-semibold);
    }
    .frameChild1 {
      height: 1024px;
      width: 1px;
      position: relative;
      background-color: var(--system-light-grey);
    }
    .frameParent {
      width: 280px;
      background-color: var(--system-white);
      overflow: hidden;
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: flex-start;
      padding: 0px 0px 0px var(--padding-5xl);
      box-sizing: border-box;
      gap: 23px;
      line-height: normal;
      letter-spacing: normal;
    }
  </style>
