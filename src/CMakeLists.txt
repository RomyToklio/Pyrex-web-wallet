cmake_minimum_required(VERSION 3.2)

project(mypyx)

set(SOURCE_FILES
		CmdLineOptions.cpp
		CurrentBlockchainStatus.cpp
        db/MySqlConnector.cpp
        db/MySqlAccounts.cpp
        db/ssqlses.cpp
		OpenMoneroRequests.cpp
		TxSearch.cpp
        RPCCalls.cpp
		omversion.h.in
		BlockchainSetup.cpp
		ThreadRAII.cpp
        db/MysqlPing.cpp
        TxUnlockChecker.cpp
        utils.cpp
        RandomOutputs.cpp)


# make static library called libmyxrm
# that we are going to link to
# in the root CMakeLists.txt file
add_library(mypyx
		STATIC
		${SOURCE_FILES})

target_include_monero_directories(mypyx)
target_include_directories(mypyx PRIVATE "pyxegcore")

    #target_include_directories(myxmr 
    #  PUBLIC 
    #${MONERO_SOURCE_DIR}/contrib/epee/include)


