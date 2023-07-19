import time
from selenium import webdriver
from selenium.webdriver.support.ui import Select

# Inicialização do WebDriver
driver = webdriver.Edge()  # Certifique-se de que o ChromeDriver está no PATH ou especifique o caminho.

try:
    # Passo 1
    driver.get("http://localhost:8080/#/login")
    time.sleep(2)  # Aguarda 2 segundos para a página carregar

    # Passo 2
    email_input = driver.find_element('xpath','//*[@id="exampleInputEmail1"]')
    senha_input = driver.find_element('xpath','//*[@id="cont"]/div/form/div[2]/input')
    login_button = driver.find_element('xpath','//*[@id="cont"]/div/form/div[3]/button')

    email_input.send_keys("teste1@email.com")
    senha_input.send_keys("123123")
    login_button.click()

    time.sleep(2)  # Aguarda 2 segundos para o redirecionamento ocorrer
    if "http://localhost:8080/#/" in driver.current_url:
        print("Teste de Autenticação de Login: PASSOU")
    else:
        print("Teste de Autenticação de Login: FALHOU")
        
except Exception as e:
    print("Teste de Autenticação de Login: FALHOU")
    print(e)




try:
    # Passo 1
    driver.get("http://localhost:8080/#/imoveis")
    time.sleep(2)  # Aguarda 2 segundos para a página carregar

    # Passo 2
    cadastrar_imovel_button = driver.find_element('xpath','//*[@id="app"]/div[2]/button')
    cadastrar_imovel_button.click()

    time.sleep(2)
    # Passo 3
    cep_input = driver.find_element('xpath','//*[@id="app"]/div/form/div/div[1]/div[1]/input')
    logradouro_input = driver.find_element('xpath','//*[@id="app"]/div/form/div/div[1]/div[2]/input')
    numero_input = driver.find_element('xpath','//*[@id="app"]/div/form/div/div[1]/div[3]/input')
    bairro_input = driver.find_element('xpath','//*[@id="app"]/div/form/div/div[1]/div[5]/input')
    cidade_input = driver.find_element('xpath','//*[@id="app"]/div/form/div/div[2]/div[1]/input')
    estado_input = driver.find_element('xpath','//*[@id="app"]/div/form/div/div[2]/div[2]/input')
    preco_input = driver.find_element('xpath','//*[@id="app"]/div/form/div/div[2]/div[3]/input')
    modelodenegocio_select =Select(driver.find_element('xpath','//*[@id="inputState"]'))
    tipodeimovel_select = Select(driver.find_element('xpath','//*[@id="inputState2"]'))
    
    cep_input.send_keys("3720172")
    logradouro_input.send_keys("Rua Coronel")
    numero_input.send_keys("121")
    bairro_input.send_keys("centro")
    cidade_input.send_keys("Lavras")
    estado_input.send_keys("MG")
    preco_input.send_keys("5831.36")
    modelodenegocio_select.select_by_value("false")  # Seleciona a opção "Venda"
    tipodeimovel_select.select_by_value("true") 

    cadastrar_button = driver.find_element('xpath','//*[@id="app"]/div/form/div/div[2]/div[6]/button')
    cadastrar_button.click()

    # Verificação do resultado
    time.sleep(2)  # Aguarda 2 segundos para o redirecionamento ocorrer
    assert "http://localhost:8080/#/imoveis" in driver.current_url
    print("Teste de Cadastro de Imóvel: PASSOU")

except Exception as e:
    print("Teste de Cadastro de Imóvel: FALHOU")
    print(e)



try:
    # Passo 1
    driver.get("http://localhost:8080/#/transacoes")
    time.sleep(2)  # Aguarda 2 segundos para a página carregar

    # Passo 2
    cadastrar_transacao = driver.find_element('xpath','//*[@id="app"]/div[2]/button')
    cadastrar_transacao.click()
    
    cpfComprador_input = driver.find_element('xpath','//*[@id="app"]/div/form/div/div[1]/input')
    codImovel_input = driver.find_element('xpath','//*[@id="app"]/div/form/div/div[2]/input')
    
    time.sleep(1)
    cpfComprador_input.send_keys("123123")
    codImovel_input.send_keys("19")
    
    cadastrar_button = driver.find_element('xpath','//*[@id="app"]/div/form/div/div[3]/button')
    cadastrar_button.click()
    
    # Verificação do resultado
    time.sleep(2)  # Aguarda 2 segundos para o redirecionamento ocorrer
    assert "http://localhost:8080/#/transacoes/cadastrar" in driver.current_url
    print("Teste de Cadastro de Transação: PASSOU")

except Exception as e:
    print("Teste de Cadastro de Transação: FALHOU")
    print(e)

finally:
    driver.quit()